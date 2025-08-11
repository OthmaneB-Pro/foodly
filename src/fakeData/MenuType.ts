export type MenuType = {
  id: number;
  imageSource: string;
  title: string;
  price: number;
  quantity: number;
  isAvailable: boolean;
  isAdvertised: boolean;
};


export type User = {
  username: string;
  password: string;
  role: string; 
}