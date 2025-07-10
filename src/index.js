import './style.css';
import { fibs, fibsRec } from './fibonacci.js';
import { mergeSort } from './mergeSort.js';

const root = document.createElement('div');
root.classList.add('container');

root.innerHTML = `
  <div class="card">
    <h2>Iterative Fibonacci</h2>
    <pre>${fibs(8).join(', ')}</pre>
  </div>
  <div class="card">
    <h2>Recursive Fibonacci</h2>
    <pre>${fibsRec(8).join(', ')}</pre>
  </div>
  <div class="card">
    <h2>Merge Sort</h2>
    <pre>${mergeSort([3, 2, 1, 13, 8, 5, 0, 1]).join(', ')}</pre>
  </div>
`;

document.body.appendChild(root);
