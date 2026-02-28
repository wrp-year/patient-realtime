# Development Planning Documentation

## 1️⃣ Project Structure

The project follows a modular architecture:

- `components/` contains UI components separated by responsibility.
- `lib/socket.ts` centralizes the socket connection.
- `server.js` handles real-time backend logic.
- `app/` uses Next.js App Router for page routing.

This separation ensures maintainability and scalability.

---

## 2️⃣ Design Decisions

### UI/UX Considerations
- Clean clinical theme using teal/emerald gradients.
- High contrast form inputs for readability.
- Responsive grid layout for mobile and desktop.
- Real-time status badges (Connected / Typing / Submitted).

### Accessibility
- Black text on light background.
- Clear labels for each input.
- Read-only staff inputs for clarity.

---

## 3️⃣ Component Architecture

### PatientForm
- Manages form state.
- Emits updates through Socket.IO.
- Sends status updates (Typing / Submitted).

### StaffView
- Listens to socket events.
- Displays real-time form data.
- Shows connection indicator.

### Socket Layer
- Shared connection via `lib/socket.ts`.
- Prevents duplicate connections.
- Centralized event handling.

---

## 4️⃣ Real-Time Synchronization Flow

### Step-by-Step Flow

1. Patient connects → emits `patient-online`
2. Server increments active patient count
3. Server broadcasts `patient-status`
4. Staff receives status and updates badge
5. Patient types → emits `patient-update`
6. Server stores latest state
7. Server broadcasts updated state
8. Staff dashboard re-renders instantly
9. Patient submits → status changes to `Submitted`

---

## 5️⃣ Scalability Considerations

Future improvements could include:

- Multi-room support (one room per patient session)
- Authentication layer for staff
- Database persistence
- Rate limiting and validation
- Error handling & reconnection strategies

---

## 6️⃣ Testing Strategy

Manual testing included:

- Multiple browser tabs
- Network disconnection simulation
- Form submission verification
- Real-time synchronization latency check

All real-time updates are verified under 1 second latency in local testing.