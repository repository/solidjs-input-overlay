export interface InputOverlayEvent {
  event_source: string;
  event_type: string;
  time: number;
  mask: number;
}

interface MouseEvent extends InputOverlayEvent {
  clicks: number;
  x: number;
  y: number;
}

export interface MouseMovedEvent extends MouseEvent {
  button: number;
}

export interface MouseWheelEvent extends MouseEvent {
  amount: number;
  direction: number;
  rotation: number;
  type: number;
}

export interface MousePressedEvent extends MouseEvent {
  button: number;
}

export interface MouseReleasedEvent extends MouseEvent {
  button: number;
}

export interface KeyReleasedEvent extends InputOverlayEvent {
  keycode: number;
  rawcode: number;
}

export interface KeyPressedEvent extends InputOverlayEvent {
  keycode: number;
  rawcode: number;
}

export function isIOEvent(obj: unknown): obj is InputOverlayEvent {
  return (
    typeof (obj as InputOverlayEvent).event_source === "string" &&
    typeof (obj as InputOverlayEvent).event_type === "string" &&
    typeof (obj as InputOverlayEvent).time === "number"
  );
}

export function isMouseMovedEvent(event: InputOverlayEvent): event is MouseMovedEvent {
  return event.event_type === "mouse_moved";
}

export function isMouseWheelEvent(event: InputOverlayEvent): event is MouseWheelEvent {
  return event.event_type === "mouse_wheel";
}

export function isMousePressedEvent(event: InputOverlayEvent): event is MousePressedEvent {
  return event.event_type === "mouse_pressed";
}

export function isMouseReleasedEvent(event: InputOverlayEvent): event is MouseReleasedEvent {
  return event.event_type === "mouse_released";
}

export function isKeyPressedEvent(event: InputOverlayEvent): event is KeyPressedEvent {
  return event.event_type === "key_pressed";
}

export function isKeyReleasedEvent(event: InputOverlayEvent): event is KeyReleasedEvent {
  return event.event_type === "key_released";
}
