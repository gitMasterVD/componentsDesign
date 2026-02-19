import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-coming-soon',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="coming-soon">
      <div class="message-card">
        <h2>Components will be ready soon</h2>
        <p>We are currently working hard to bring you a comprehensive set of high-quality components. Stay tuned!</p>
        <div class="loader-bar"></div>
      </div>
    </div>
  `,
    styles: [`
    .coming-soon {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 4rem 2rem;
    }
    .message-card {
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      padding: 3rem;
      border-radius: 16px;
      text-align: center;
      max-width: 500px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.03);
    }
    h2 {
      font-size: 1.75rem;
      font-weight: 800;
      color: var(--color-primary);
      margin-bottom: 1rem;
    }
    p {
      color: var(--color-text-secondary);
      line-height: 1.6;
      margin-bottom: 2rem;
    }
    .loader-bar {
      height: 4px;
      background: var(--color-tertiary);
      border-radius: 2px;
      position: relative;
      overflow: hidden;
      &::after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 30%;
        background: var(--color-primary);
        animation: loading 1.5s infinite ease-in-out;
      }
    }
    @keyframes loading {
      0% { left: -30%; }
      100% { left: 100%; }
    }
  `]
})
export class ComingSoonComponent { }
