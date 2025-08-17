import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})


export class ProductComponent {
  constructor(private Router: Router) { }
  bannerTitle = 'Pan India delivery only @49';

  products = [
    {
      discount: '25% OFF',
      type: 'image',
      media: '/assets/IMG/Sonachur Rice.png',
      title: 'Sonachur Rice',
      tagline: 'Aromatic, Soft texture',
      description: '🌿 100% Organic & Chemical-Free <br> 🍚 Aromatic Soft Texture After Cooking',
      price: 200
    },
    {
      discount: '25% OFF',
      type: 'image',
      media: '/assets/IMG/Chintu Rice.png',
      title: 'Chintu Rice',
      tagline: 'The Black Pearl of Ayurveda',
      description: '🌿 100% Organic & Chemical-Free <br> 🍚 Soft, Fluffy Texture After Cooking',
      price: 200
    },
    {
      discount: '25% OFF',
      type: 'image',
      media: '/assets/IMG/Katarni rice.png',
      title: 'Katarni Rice',
      tagline: 'Royal Taste of Bihar — Authentic & Aromatic',
      description: '🌿 100% Organic & Chemical-Free <br> 🍚 Soft, Fluffy Texture After Cooking',
      price: 120
    },
    {
      discount: '25% OFF',
      type: 'image',
      media: '/assets/IMG/multigrain .png',
      title: 'Multigrain Aata',
      tagline: 'High-Fiber & Nutrient-Rich Flour',
      description: '🌾 Blend of 6 Natural Grains <br> 💪 Boosts Energy & Digestion <br> ✅ Chemical-Free & Freshly Milled',
      price: 89
    }
  ];

  testimonial = {
    message: 'Excellent quality and truly farm-fresh products. Highly recommend!',
    author: 'Julia M.'
  };
  // 🛒 Cart Array
  cart: any[] = [];
  deliveryCharge: number = 49;
  popupVisible: boolean = false;
  selectedProduct: any = null;
  discountPercent: number = 25;
  // Add item to cart
  // addToCart(product: any) {
  //   this.cart.push({ ...product, quantity: 1 });
  //  this.popupMessage = `${product.title} added to cart 🛒`;

  //   setTimeout(() => {
  //     this.popupMessage = '';
  //   }, 2000);
  // }
  addToCart(product: any) {
    this.cart.push({ ...product, quantity: 1 });
    this.selectedProduct = product;
    this.popupVisible = true;

    // Auto-hide after 4 seconds if user does nothing

  }
  getDiscountAmount(): number {
    return (this.getCartTotal() * this.discountPercent) / 100;
  }

  closePopup() {
    this.popupVisible = false;
  }

  goToCart() {
    this.popupVisible = false;
    const element = document.querySelector('.cart-actions');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // Generate WhatsApp message
  getWhatsAppLink(): string {
    if (this.cart.length === 0) {
      return 'https://wa.me/919296574860?text=Hello,%20I%20am%20interested%20in%20your%20products%20from%20FTTC%20FOODS.';
    }

    let message = 'Hello, I want to order the following items from FTTC FOODS:\n\n';

    this.cart.forEach((item, index) => {
      message += `${index + 1}. ${item.title} - Qty: ${item.quantity} - ₹${item.price}\n`;
    });

    const subtotal = this.getCartTotal();
    const discount = this.getDiscountAmount();
    const finalTotal = subtotal + this.deliveryCharge;

    message += `Subtotal: ₹${subtotal}\n`;
    message += `\nDiscount (25% OFF): -₹${discount}`;
    message += `Delivery Charge: ₹${this.deliveryCharge}\n`;
    message += `🔹 Final Total: ₹${finalTotal}`;

    return `https://wa.me/919296574860?text=${encodeURIComponent(message)}`;
  }

  // Subtotal (without delivery)
  getCartTotal(): number {
    return this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  // Final total (with delivery)
  getFinalTotal(): number {
    return this.getCartTotal() - this.getDiscountAmount() + this.deliveryCharge;
  }

  getWhatsAppQR(): string {
    return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(this.getWhatsAppLink())}`;
  }


  removeFromCart(index: number) {
    this.cart.splice(index, 1);
  }
  popupMessage: string = '';



}
