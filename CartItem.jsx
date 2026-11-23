export interface CartItemData {
  productId: string;
  name: string;
  unitPrice: number; // in the smallest currency unit (e.g. cents/paisa) to avoid float errors
  quantity: number;
  imageUrl?: string;
}

export class CartItem {
  readonly productId: string;
  readonly name: string;
  readonly unitPrice: number;
  readonly imageUrl?: string;
  private _quantity: number;

  constructor({ productId, name, unitPrice, quantity, imageUrl }: CartItemData) {
    if (unitPrice < 0) throw new Error("unitPrice cannot be negative");
    this.productId = productId;
    this.name = name;
    this.unitPrice = unitPrice;
    this.imageUrl = imageUrl;
    this._quantity = 0;
    this.quantity = quantity; // goes through the setter for validation
  }

  get quantity(): number {
    return this._quantity;
  }

  set quantity(value: number) {
    if (!Number.isInteger(value) || value < 1) {
      throw new Error("quantity must be a whole number of at least 1");
    }
    this._quantity = value;
  }

  get total(): number {
    return this.unitPrice * this._quantity;
  }

  increase(by = 1): void {
    this.quantity = this._quantity + by;
  }

  decrease(by = 1): void {
    this.quantity = this._quantity - by;
  }

  toJSON(): CartItemData {
    return {
      productId: this.productId,
      name: this.name,
      unitPrice: this.unitPrice,
      quantity: this._quantity,
      imageUrl: this.imageUrl,
    };
  }
}

// Example usage
// const item = new CartItem({ productId: "p1", name: "T-Shirt", unitPrice: 1999, quantity: 2 });
// item.increase();      // quantity: 3
// console.log(item.total); // 5997
