export type CategoryType = 
  | 'all' 
  | 'vertical_tank' 
  | 'horizontal_tank' 
  | 'industrial_pump' 
  | 'submersible_pump';

export type PageType = 'home' | 'products' | 'product-detail' | 'corporate' | 'faq' | 'contact';

export type CorporateSubTab = 'about' | 'hr' | 'quality';

export interface Product {
  id: string;
  name: string;
  category: CategoryType;
  categoryName: string;
  image: string;
  capacityRange: string;
  material: string;
  features: string[];
  description: string;
  startingPrice: string;
  badge?: string;
  specs: {
    dimensions: string;
    thickness: string;
    outletSize: string;
    warranty: string;
    foodGrade: boolean;
  };
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedCapacity: string;
}

export interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
}

export type OrderStatusStep = 'placed' | 'production' | 'quality' | 'shipping' | 'delivered';

export interface OrderTrackItem {
  orderCode: string;
  customerName: string;
  customerPhone: string;
  productName: string;
  capacity: string;
  orderDate: string;
  estimatedDelivery: string;
  currentStep: OrderStatusStep;
  city: string;
  notes: string;
  history: {
    title: string;
    date: string;
    description: string;
    completed: boolean;
  }[];
}
