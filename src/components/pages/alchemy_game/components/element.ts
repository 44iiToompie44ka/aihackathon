export interface AlchElement {
  text: string;
  emoji: string;
  discovered: boolean;
}

export interface PlacedElement extends AlchElement {
  id: string;
  x: number;
  y: number;
  isLoading?: boolean;
}
