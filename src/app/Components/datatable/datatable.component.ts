import { Component, OnInit } from '@angular/core';

interface DataItem {
  id: number;
  name: string;
  age: number;
  city: string;
}

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit {
  data: DataItem[] = [
    { id: 1, name: 'Ibrahem Dhaher', age: 21, city: 'Al Madina' },
    { id: 2, name: 'Bruce Wayne', age: 34, city: 'Gotham' },
    // ... more data ...
  ];

  showCreateModal = false;
  showUpdateModal = false;
  showDeleteModal = false;
  selectedItem: DataItem | null = null;

  constructor() {}

  ngOnInit(): void {}

  openCreateModal() {
    this.showCreateModal = true;
  }

  handleCreate(newItem: DataItem) {
    // Assuming `id` needs to be unique and auto-generated
    newItem.id = this.data.length + 1; 
    this.data.push(newItem);
    this.showCreateModal = false;
  }

  openUpdateModal(item: DataItem) {
    this.selectedItem = { ...item };
    this.showUpdateModal = true;
  }

  handleUpdate(updatedItem: DataItem) {
    const index = this.data.findIndex(item => item.id === updatedItem.id);
    if (index !== -1) {
      this.data[index] = updatedItem;
    }
    this.showUpdateModal = false;
    this.selectedItem = null;
  }

  openDeleteModal(item: DataItem) {
    this.selectedItem = item;
    this.showDeleteModal = true;
  }

  handleDelete(itemId: number) {
    this.data = this.data.filter(item => item.id !== itemId);
    this.showDeleteModal = false;
  }

  // Add any additional methods needed for your DataTable
}
