// interface/index.ts

// من pages/index.tsx
export interface PageRouteProps {
  pageRoute: string;
}

// من components/common/Button.tsx
export interface ButtonProps {
  action: () => void;
  buttonLabel: string;
  buttonBackgroundColor: string;
}

// من components/layouts/Layout.tsx
export interface LayoutProps {
  children: React.ReactNode;
}
