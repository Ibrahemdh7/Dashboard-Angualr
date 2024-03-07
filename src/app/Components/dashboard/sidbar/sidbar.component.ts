import { Component,OnInit  } from '@angular/core';



interface MenuItem {
  label: string;
  icon: string;
  link: string;
  isActive?: boolean;
}
@Component({
  selector: 'app-sidbar',
  templateUrl: './sidbar.component.html',
  styleUrl: './sidbar.component.scss'
})
export class SidbarComponent {

  menuItems: MenuItem[] = [
    { label: 'Dashboard', icon: 'bi bi-house-door-fill', link: '/', isActive: true },
    { label: 'Profile', icon: 'bi bi-person-fill', link: '/profile' },
    { label: 'Products', icon: 'bi bi-bag-fill', link: '/products' },
    { label: 'Orders', icon: 'bi bi-card-list', link: '/orders' },
  ];

  constructor() { }

  ngOnInit(): void { }
}