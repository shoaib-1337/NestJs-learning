import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService {
  private categories: string[] = ['Mobile', 'Tablet', 'Laptop'];
  getCategories() {
    return this.categories;
  }
}
