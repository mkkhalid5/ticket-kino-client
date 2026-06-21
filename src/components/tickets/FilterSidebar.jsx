"use client";

import {
    Button,
    Card,
    Input,
    
} from "@heroui/react";

const FilterSidebar = () => {
    return (
        <Card className="p-5 sticky top-24">
            <h2 className="font-bold text-xl mb-5">
                Filter Results
            </h2>
            <div className="space-y-4">
                <Input
                    label="From"
                    placeholder="Origin city"
                />
                <Input
                    label="To"
                    placeholder="Destination city"
                />

                {/* <Select label="Transport Type">
                    <SelectItem key="all">
                        All Types
                    </SelectItem>
                    <SelectItem key="airplane">
                        Airplane
                    </SelectItem>
                    <SelectItem key="train">
                        Train
                    </SelectItem>
                    <SelectItem key="bus">
                        Bus
                    </SelectItem>
                </Select> */}
               <Input
                    type="number"
                    label="Min Price"
                />
                <Input
                    type="number"
                    label="Max Price"
                />
                <Button
                    color="secondary"
                    className="w-full"
                >
                    Apply Filters
                </Button>
            </div>
        </Card>
    );
};
export default FilterSidebar;