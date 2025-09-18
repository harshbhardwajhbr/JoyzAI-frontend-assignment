import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TreeNode {
  [key: string]: string[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  imports: [CommonModule]
})
export class AppComponent {
  tree: TreeNode = { 
    "a": ["b", "c"], 
    "b": ["d", "e"], 
    "c": ["f", "g"], 
    "e": ["h", "i"], 
    "f": ["j", "k"]
  };

  getChildren(node: string): string[] {
    return this.tree[node] || [];
  }
}
