"use client";

import { useSession } from "@/lib/auth-client";
import { Check, Envelope, LocationArrow, PencilToLine, SquareChartBar, TagDollar, Plus } from "@gravity-ui/icons";
import { Button, Checkbox, CheckboxGroup, DateField, Description, Input, InputGroup, Label, ListBox, Radio, RadioGroup, Select, TextField, TimeField } from "@heroui/react";
import { useState } from "react";


export default function AddTicketForm() {
    const [transportType, setTransportType] = useState("");
    const { data: session } = useSession();
    const user = session?.user;
    const providePerks =
        [
            { id: 1, value: "cabin", text: "Cabin" },
            { id: 2, value: "breakfast", text: "BreakFast" },
            { id: 3, value: "lunch", text: "Lunch" },
            { id: 4, value: "dinner", text: "Dinner" },
            { id: 5, value: "wifi", text: "WIFI" },
        ]

    const handleAddTicket = async (e) => {

        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const ticketData = Object.fromEntries(formData.entries());
        const { ticketTittle, fromLocation, toLocation, price, quantity, time, date, perks } = ticketData;
        console.log("data", ticketData);

        try {
            const imageFile = formData.get("image");
            const imgData = new FormData();
            imgData.append("image", imageFile);
            const IMGBB_API_KEY = process.env.NEXT_PUBLIC_IMG_API_KEY;
            const response = await fetch(
                `https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`,
                {
                    method: "POST",
                    body: imgData,
                }
            );
            const imageData = await response.json();
            console.log(imageData);
            const imageUrl = imageData.data.url;
            // console.log("Image URL:", imageUrl);
            console.log(user);
            const newTicket = {
                ticketTitle: ticketTittle,
                fromLocation: fromLocation,
                toLocation: toLocation,
                transportType: transportType,
                price: Number(price),
                quantity: Number(quantity),
                totalQuantity: Number(quantity),
                date: date,
                time: time,
                perks: perks,
                image: imageUrl,
                vendorName: user?.name,
                vendorEmail: user?.email,
                adminApproval: "pending",
                advertise: "false",
            }
            console.log("new Ticket: ", newTicket);

            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/api/allticket`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(newTicket)
            });
            const data = await res.json();
            console.log(data);
            if (res.ok) {
                alert("Ticket Created Successfull !");
                window.location.reload();
            }
            else {
                alert("Failed to create ticket");
            }

        }
        catch (error) {
            console.log(error);
            alert("Something went wrong");
        }
    }

    return (
        <div className="">
            <h2 className="text-3xl font-bold">Add a New Ticket</h2>
            <form onSubmit={handleAddTicket} className="flex justify-center items-center space-y-6 p-20">
                <div className="grid grid-cols-1  md:grid-cols-2 gap-6 w-150">
                    <TextField className="w-full md:col-span-2 max-w-70 md:max-w-148" name="ticketTittle">
                        <Label>Ticket Tittle</Label>
                        <InputGroup>
                            <InputGroup.Prefix>
                                <PencilToLine className="size-4 text-muted" />
                            </InputGroup.Prefix>
                            <InputGroup.Input className="w-full max-w-70" placeholder="Akota Travels" />
                        </InputGroup>
                    </TextField>

                    <TextField className="w-full max-w-70" name="fromLocation">
                        <Label>Form (Location)</Label>
                        <InputGroup>
                            <InputGroup.Prefix>
                                <LocationArrow className="size-4 text-muted" />
                            </InputGroup.Prefix>
                            <InputGroup.Input className="w-full max-w-70" placeholder="Rajshahi" />
                        </InputGroup>
                    </TextField>

                    <TextField className="w-full max-w-70" name="toLocation">
                        <Label>To (Location)</Label>
                        <InputGroup>
                            <InputGroup.Prefix>
                                <LocationArrow className="size-4 text-muted" />
                            </InputGroup.Prefix>
                            <InputGroup.Input className="w-full max-w-70" placeholder="Dhaka" />
                        </InputGroup>
                    </TextField>

                    <Select
                        className=""
                        placeholder="Select one"
                        selectedKey={transportType}
                        onSelectionChange={setTransportType}>
                        <Label>Transport Type</Label>
                        <Select.Trigger>
                            <Select.Value />
                            <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover>
                            <ListBox>
                                <ListBox.Item id="bus" textValue="Bus">
                                    Bus
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="truck" textValue="Truck">
                                    Truck
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="train" textValue="Train">
                                    Train
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="airplane" textValue="Airplane">
                                    Airplane
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="cng" textValue="CNG">
                                    CNG
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="bike" textValue="Bike">
                                    Bike
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="launch" textValue="Launch">
                                    Launch
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                            </ListBox>
                        </Select.Popover>
                    </Select>

                    <TextField className="w-full max-w-70" name="price">
                        <Label>Price per Seat</Label>
                        <InputGroup>
                            <InputGroup.Prefix>
                                <TagDollar className="size-4 text-muted" />
                            </InputGroup.Prefix>
                            <InputGroup.Input className="w-full max-w-70" placeholder="TK 1000" />
                        </InputGroup>
                    </TextField>

                    <TextField className="w-full max-w-70" name="quantity">
                        <Label>Ticket Quantity</Label>
                        <InputGroup>
                            <InputGroup.Prefix>
                                <SquareChartBar className="size-4 text-muted" />
                            </InputGroup.Prefix>
                            <InputGroup.Input className="w-full max-w-70" placeholder="30" />
                        </InputGroup>
                    </TextField>

                    <DateField className="w-[256px]" name="date">
                        <Label>Date</Label>
                        <DateField.Group>
                            <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                        </DateField.Group>
                    </DateField>

                    <TimeField className="w-[256px]" name="time">
                        <Label>Time</Label>
                        <TimeField.Group>
                            <TimeField.Input>{(segment) => <TimeField.Segment segment={segment} />}</TimeField.Input>
                        </TimeField.Group>
                    </TimeField>

                    <CheckboxGroup defaultValue="wifi" name="perks">
                        <Label>Perks selection</Label>
                        <Description>Choose the perks you want to provide</Description>
                        <div className="flex gap-1">
                            {
                                providePerks.map(perk =>
                                    <Checkbox key={perk.id} value={perk.value}>
                                        <Checkbox.Content>
                                            <Checkbox.Control>
                                                <Checkbox.Indicator />
                                            </Checkbox.Control>
                                            {perk.text}
                                        </Checkbox.Content>
                                    </Checkbox>
                                )}
                        </div>
                    </CheckboxGroup>
                    <input
                        type="file"
                        accept="image/*"
                        name="image"
                    />
                    <TextField className="w-full max-w-70" name="vendorName">
                        <Label>Your Name</Label>
                        <InputGroup>
                            <InputGroup.Prefix>
                                <SquareChartBar className="size-4 text-muted" />
                            </InputGroup.Prefix>
                            <InputGroup.Input className="w-full max-w-70" value={user?.name} disabled />
                        </InputGroup>
                    </TextField>

                    <TextField className="w-full max-w-70" name="vendorEmail">
                        <Label>Your Email</Label>
                        <InputGroup>
                            <InputGroup.Prefix>
                                <SquareChartBar className="size-4 text-muted" />
                            </InputGroup.Prefix>
                            <InputGroup.Input className="w-full max-w-70" value={user?.email} disabled />
                        </InputGroup>
                    </TextField>

                    <Button type="submit" className="w-full max-w-70 md:max-w-148  rounded-full md:col-span-2">
                        <Check />
                        Submit
                    </Button>

                </div>

            </form>
        </div>

    );
}