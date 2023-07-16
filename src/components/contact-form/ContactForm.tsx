'use client';

import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Combobox } from '@/components/contact-form/Combobox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const make = [
  {
    value: 'mercedes',
    label: 'Mercedes',
    models: [{ value: 'g63', label: 'G63' }],
  },
  {
    value: 'bmw',
    label: 'BMW',
  },
  {
    value: 'nissan',
    label: 'Nissan',
  },
  {
    value: 'honda',
    label: 'Honda',
  },
  {
    value: 'ferrari',
    label: 'Ferrari',
  },
  {
    value: 'lamborghini',
    label: 'Lamborghini',
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
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedMake, setSelectedMake] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <form className="flex w-fit w-full flex-col gap-3 md:max-w-sm" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex w-full items-center justify-between gap-1.5">
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="make">Make</Label>
          <Combobox searchPlaceholder={'Search make...'} placeholder={'Select make...'} items={make} />
        </div>

        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="make">Model</Label>
          <Combobox
            searchPlaceholder={'Search model...'}
            placeholder={'Select model...'}
            items={selectedMake?.models}
            disabled={!selectedModel}
          />
        </div>
      </div>

      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="make">Budget</Label>
        <select
          className="border-input placeholder:text-muted-foreground text-bold focus-visible:ring-ring bg-brow-50 flex h-10 w-full rounded-md border bg-gray-100 px-3 py-2 text-base text-brown-900 ring-offset-background file:border-0 file:bg-transparent file:font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          name="cars"
          id="cars"
        >
          <option value="0">Select your budget...</option>
          <option value="10">to $10 000</option>
          <option value="10-15">from $10 000 to $15 000</option>
          <option value="15-20">from $15 000 to $20 000</option>
          <option value="20-25">from $20 000 to $25 000</option>
          <option value="30">from $30 000</option>
        </select>
      </div>

      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input {...register('email', { required: true })} type="email" id="email" placeholder="Email..." />
        {errors.model && <span>This field is required</span>}
      </div>

      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="email">Name</Label>
        <Input {...register('name', { required: true })} type="text" id="name" placeholder="Name..." />
        {errors.model && <span>This field is required</span>}
      </div>

      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="email">Phone number</Label>
        <Input {...register('phone', { required: true })} type="number" id="phone" placeholder="Phone number..." />
        {errors.model && <span>This field is required</span>}
      </div>
    </form>
  );
};
