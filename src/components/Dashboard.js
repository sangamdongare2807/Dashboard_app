// src/components/Dashboard.js
import React, { useState } from 'react';
import { useDashboardStore } from '../store/dashboardStore';

const Dashboard = () => {
  const { categories, addWidget, removeWidget } = useDashboardStore();
  const [newWidgetName, setNewWidgetName] = useState('');
  const [newWidgetText, setNewWidgetText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(categories[0]?.id || 1);

  const handleAddWidget = () => {
    const newWidget = {
      id: Date.now(), // Generate a unique ID for the new widget
      name: newWidgetName,
      text: newWidgetText
    };
    addWidget(selectedCategory, newWidget);
    setNewWidgetName('');
    setNewWidgetText('');
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <h2>Add Widget</h2>
        <select onChange={(e) => setSelectedCategory(parseInt(e.target.value))}>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Widget Name"
          value={newWidgetName}
          onChange={(e) => setNewWidgetName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Widget Text"
          value={newWidgetText}
          onChange={(e) => setNewWidgetText(e.target.value)}
        />
        <button onClick={handleAddWidget}>+ Add Widget</button>
      </div>
      <div>
        {categories.map((category) => (
          <div key={category.id}>
            <h2>{category.name}</h2>
            {category.widgets.map((widget) => (
              <div key={widget.id}>
                <h3>{widget.name}</h3>
                <p>{widget.text}</p>
                <button onClick={() => removeWidget(category.id, widget.id)}>Remove Widget</button>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
