'use client';

import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Combobox, item } from '@/components/contact-form/Combobox';
import { Button } from '@/components/ui/buttons';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

// might need to remove value - its auto generated
const makes = [
  {
    value: 'mercedes benz',
    label: 'Mercedes Benz',
    models: [
      { value: 'g63', label: 'G63' },
      { value: 'a-class', label: 'A-Class' },
      { value: 'c-class', label: 'C-Class' },
      { value: 'cla', label: 'CLA' },
    ],
  },
  {
    value: 'bmw',
    label: 'BMW',
    models: [
      { value: '1 series', label: '1 Series' },
      { value: '2 series', label: '2 Series' },
      { value: '3 series', label: '3 Series' },
      { value: '4 series', label: '4 Series' },
    ],
  },
  {
    value: 'nissan',
    label: 'Nissan',
    models: [
      { value: 'leaf', label: 'Leaf' },
      { value: 'micra', label: 'Micra' },
      { value: 'note', label: 'Note' },
      { value: 'tilda', label: 'Tilda' },
    ],
  },
  {
    value: 'honda',
    label: 'Honda',
    models: [
      { value: '200sx', label: '200SX' },
      { value: '240sx', label: '240SX' },
      { value: '300zx', label: '300ZX' },
      { value: '350z', label: '350Z' },
    ],
  },
  {
    value: 'ferrari',
    label: 'Ferrari',
    models: [{ value: 'all models', label: 'All Models' }],
  },
  {
    value: 'lamborghini',
    label: 'Lamborghini',
    models: [{ value: 'all models', label: 'All Models' }],
  },
];

export type ContactFormProps = { id?: string };

type Inputs = {
  make: string;
  model: string;
  budget: string;
  email: string;
  name: string;
  phone: string;
};

export const ContactForm: React.FC<ContactFormProps> = () => {
  const [selectedMake, setSelectedMake] = useState<{ item: item; models: item[] } | null>(null);
  const [selectedModel, setSelectedModel] = useState<item | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log({ ...data, make: selectedMake?.item.value, model: selectedModel?.value });
  };

  const onMakeSelectHandler = (item: item | null) => {
    if (!item) {
      setSelectedMake(null);
      setSelectedModel(null);
      return;
    }

    const newSelectedMake:
      | {
          value: string;
          label: string;
          models: { value: string; label: string }[];
        }
      | undefined = makes.find((make) => make.value === item.value);

    if (newSelectedMake) {
      setSelectedMake({
        item: { label: newSelectedMake.label, value: newSelectedMake.value },
        models: [...newSelectedMake.models],
      });
      setSelectedModel(null);
    }
  };

  return (
    <form className="flex w-fit w-full flex-col gap-3 md:max-w-sm" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex w-full items-center justify-between gap-1.5">
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="make">Make</Label>
          <Combobox
            searchPlaceholder={'Search make...'}
            placeholder={'Select make...'}
            items={makes}
            onItemSelect={(item) => onMakeSelectHandler(item)}
          />
        </div>

        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="make">Model</Label>
          <Combobox
            searchPlaceholder={'Search model...'}
            placeholder={'Select model...'}
            items={selectedMake?.models}
            disabled={!selectedMake}
            onItemSelect={(item) => setSelectedModel(item)}
          />
        </div>
      </div>

      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="budget">Budget</Label>
        <select
          className="border-input placeholder:text-muted-foreground text-bold focus-visible:ring-ring bg-brow-50 flex h-10 w-full rounded-md border bg-gray-100 px-3 py-2 text-base text-brown-900 ring-offset-background file:border-0 file:bg-transparent file:font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          id="bugdet"
          {...register('budget')}
        >
          <option value="0">Select your budget...</option>
          <option value="10">to $10 000</option>
          <option value="10-15">from $10 000 to $15 000</option>
          <option value="15-20">from $15 000 to $20 000</option>
          <option value="20-25">from $20 000 to $25 000</option>
          <option value="30">from $30 000</option>
        </select>
        {errors.budget && <span className={'text-red-400'}>This field is required</span>}
      </div>

      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input {...register('email', { required: true })} type="email" id="email" placeholder="Email..." />
        {errors.email && <span className={'text-red-400'}>This field is required</span>}
      </div>

      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="email">Name</Label>
        <Input {...register('name', { required: true })} type="text" id="name" placeholder="Name..." />
        {errors.name && <span className={'text-red-400'}>This field is required</span>}
      </div>

      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="email">Phone number</Label>
        <Input {...register('phone', { required: true })} type="number" id="phone" placeholder="Phone number..." />
        {errors.phone && <span className={'text-red-400'}>This field is required</span>}
      </div>

      <Button type={'submit'} className="z-10 mt-2" variant="highlight" size="xl">
        Calculate Now
      </Button>
    </form>
  );
};
