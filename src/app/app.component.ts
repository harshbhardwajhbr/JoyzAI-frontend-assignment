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

  initialVisited = new Set<string>();

  getRootNodes(): string[] {
    const allKeys = Object.keys(this.tree);
    const allChildren = Object.values(this.tree).flat();
    return allKeys.filter(key => !allChildren.includes(key));
  }

  getUpdatedVisited(visited: Set<string>, node: string): Set<string> {
    const newVisited = new Set(visited);
    newVisited.add(node);
    return newVisited;
  }

  getChildren(node: string): string[] {
    return this.tree[node] || [];
  }
}
