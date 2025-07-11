import type { StaticImageData } from "next/image";
export interface Supplier {
    id: bigint;
    slug: string;
    name: string;
    description?: string;
    status: string;
    account_supplier: string;
    icon?: StaticImageData;
}

export interface AccountSupplier {
    key: string;
    name: string;
    description?: string;
    logo_light: StaticImageData;
    logo_dark: StaticImageData;
}

export interface SupplierContextType {
    supplier: Supplier;
    setSupplier: (supplier: Supplier) => void;
}
