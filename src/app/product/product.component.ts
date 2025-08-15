import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
 // Banner Heading
  bannerTitle = 'Pan India delivery only @49';

  // Product Data
  products = [
    {
      discount: '25% OFF',
       type: 'image',
      media: '/assets/IMG/20250518_2048_Chintu Rice Promotion_remix_01jvhzg6m6estbc5s55s8jf4ka.png',
      
      // type: 'video',
      // media: '/assets/IMG/video-sonachur.mp4',
      title: 'Sonachur Rice',
      tagline: 'Aromatic, Soft texture',
      description: '🌿 100% Organic & Chemical-Free <br> 🍚 Aromatic Soft Texture After Cooking',
      price: 200
    },
    {
      discount: '25% OFF',
      type: 'image',
      media: '/assets/IMG/20250518_2048_Chintu Rice Promotion_remix_01jvhzg6m6estbc5s55s8jf4ka.png',
      title: 'Chintu Rice',
      tagline: 'The Black Pearl of Ayurveda',
      description: '🌿 100% Organic & Chemical-Free <br> 🍚 Soft, Fluffy Texture After Cooking',
      price: 200
    },
    {
      discount: '25% OFF',
      type: 'image',
      media: '/assets/IMG/20250518_2048_Chintu Rice Promotion_remix_01jvhzg6m6estbc5s55s8jf4ka.png',
      title: 'Katarni Rice',
      tagline: 'Royal Taste of Bihar — Authentic & Aromatic',
      description: '🌿 100% Organic & Chemical-Free <br> 🍚 Soft, Fluffy Texture After Cooking',
      price: 120
    },
    {
      discount: '25% OFF',
      type: 'image',
      media: '/assets/IMG/20250518_2048_Chintu Rice Promotion_remix_01jvhzg6m6estbc5s55s8jf4ka.png',
      title: 'Multigrain Aata',
      tagline: 'High-Fiber & Nutrient-Rich Flour',
      description: '🌾 Blend of 6 Natural Grains <br> 💪 Boosts Energy & Digestion <br> ✅ Chemical-Free & Freshly Milled',
      price: 89
    }
  ];

  // Testimonial Data
  testimonial = {
    message: 'Excellent quality and truly farm-fresh products. Highly recommend!',
    author: 'Julia M.'
  };

}
