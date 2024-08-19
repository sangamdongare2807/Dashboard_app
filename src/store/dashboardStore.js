// src/store/dashboardStore.js
import create from 'zustand';

export const useDashboardStore = create((set) => ({
  categories: [
    {
      id: 1,
      name: 'CSPM Executive Dashboard',
      widgets: [
        { id: 1, name: 'Widget 1', text: 'Random text for Widget 1' },
        { id: 2, name: 'Widget 2', text: 'Random text for Widget 2' }
      ]
    },
    {
      id: 2,
      name: 'Another Dashboard',
      widgets: [
        { id: 3, name: 'Widget 3', text: 'Random text for Widget 3' }
      ]
    }
  ],
  addWidget: (categoryId, widget) =>
    set((state) => {
      const updatedCategories = state.categories.map((category) => {
        if (category.id === categoryId) {
          return {
            ...category,
            widgets: [...category.widgets, widget]
          };
        }
        return category;
      });
      return { categories: updatedCategories };
    }),
  removeWidget: (categoryId, widgetId) =>
    set((state) => {
      const updatedCategories = state.categories.map((category) => {
        if (category.id === categoryId) {
          return {
            ...category,
            widgets: category.widgets.filter((widget) => widget.id !== widgetId)
          };
        }
        return category;
      });
      return { categories: updatedCategories };
    })
}));
