export type Product = {
  id: string;
  name: string;
  image: string;
  unit_amount: number | null;
  quantity?: number | 1;
  description: string | null;
  metadata: string | null;
};
