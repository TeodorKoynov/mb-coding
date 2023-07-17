'use client';

import * as React from 'react';
import { useEffect, useState } from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/buttons';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

export type item = { value: string | number; label: string };

export type ComboboxProps = {
  items?: item[];
  onItemSelect?: (item: item | null) => void;
  disabled?: boolean;
  placeholder?: string;
  searchPlaceholder?: string;
};

export const Combobox: React.FC<ComboboxProps> = ({
  items: init,
  onItemSelect,
  disabled = false,
  placeholder = 'Select item...',
  searchPlaceholder = 'Search item...',
}) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState<string | null>(null);
  const [items, setItems] = useState(init);

  useEffect(() => {
    setItems(init);
    setValue(null);
  }, [init]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="default"
          role="combobox"
          disabled={disabled}
          aria-expanded={open}
          className="w-full justify-between bg-gray-100 text-gray-600"
        >
          {value && items
            ? items.find((item) => {
                return item.value === value;
              })?.label
            : placeholder}
          <ChevronsUpDown className="w ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full min-w-full bg-brown-50 p-0">
        <Command className="w-full">
          <CommandInput placeholder={searchPlaceholder} />
          <CommandEmpty>No item found.</CommandEmpty>
          <CommandGroup>
            {items
              ? items.map((item) => (
                  <CommandItem
                    className="hover:bg-brown-100/50"
                    key={item.value}
                    onSelect={(currentValue) => {
                      if (onItemSelect) {
                        const selectedItem = currentValue === value ? null : item;
                        onItemSelect(selectedItem);
                      }

                      setValue((prevValue) => (currentValue === prevValue ? null : currentValue));
                      setOpen(false);
                    }}
                  >
                    <Check className={cn('mr-2 h-4 w-4', value === item.value ? 'opacity-100' : 'opacity-0')} />
                    {item.label}
                  </CommandItem>
                ))
              : null}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
