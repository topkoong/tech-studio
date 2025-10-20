---
id: 'mobile-booking-app'
title: 'Mobile Booking System'
description: 'A comprehensive mobile booking application with real-time availability'
longDescription: 'Developed a mobile-first booking system that allows users to book services, manage appointments, and receive notifications. The app includes calendar integration, payment processing, and real-time updates.'
image: '/images/portfolio/mobile-application.svg'
technologies:
  ['React Native', 'Node.js', 'MongoDB', 'Firebase', 'Stripe', 'Expo']
category: 'Mobile Development'
client: 'Service Provider'
duration: '4 months'
features:
  [
    'Real-time booking availability',
    'Calendar integration',
    'Push notifications',
    'Payment processing',
    'User profile management',
    'Booking history',
    'Offline support',
    'Multi-language support',
  ]
challenges:
  [
    'Real-time synchronization',
    'Offline functionality',
    'Cross-platform compatibility',
    'Payment security',
  ]
solutions:
  [
    'Implemented WebSocket connections',
    'Used local storage for offline data',
    'Applied React Native best practices',
    'Integrated secure payment gateway',
  ]
results:
  [
    '60% increase in booking efficiency',
    '95% user satisfaction rate',
    '30% reduction in no-shows',
    'Cross-platform compatibility achieved',
  ]
liveUrl: 'https://booking-app.com'
githubUrl: 'https://github.com/booking-app'
featured: true
date: '2024-02-20'
---

# Mobile Booking System

A comprehensive mobile booking application designed to streamline service appointments and improve customer experience. Built with React Native for cross-platform compatibility and real-time functionality.

## Project Overview

The mobile booking system was developed for a service provider looking to digitize their appointment booking process. The app handles real-time availability, calendar integration, and seamless payment processing across iOS and Android platforms.

## Key Features

### Real-time Booking Availability

- **Live calendar updates** showing available time slots
- **Instant booking confirmation** with immediate updates
- **Conflict prevention** to avoid double bookings
- **Dynamic pricing** based on demand and time

### Calendar Integration

- **Native calendar sync** with user's device calendar
- **Google Calendar integration** for seamless scheduling
- **Outlook compatibility** for enterprise users
- **Recurring appointment** support

### Push Notifications

- **Booking confirmations** sent instantly
- **Reminder notifications** before appointments
- **Cancellation alerts** for schedule changes
- **Promotional notifications** for special offers

### Payment Processing

- **Stripe integration** for secure payments
- **Multiple payment methods** including cards and digital wallets
- **Refund processing** for cancellations
- **Invoice generation** and email delivery

## Technical Implementation

### Mobile App Architecture

```typescript
// React Native component structure
interface BookingScreenProps {
  serviceId: string;
  userId: string;
}

export function BookingScreen({ serviceId, userId }: BookingScreenProps) {
  const [availableSlots, setAvailableSlots] = useState<TimeSlot[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);
  const { mutate: createBooking } = useCreateBooking();

  const handleBooking = async () => {
    if (!selectedSlot) return;

    try {
      await createBooking({
        serviceId,
        userId,
        slot: selectedSlot,
        paymentMethod: 'stripe',
      });

      // Show success message
      Alert.alert('Success', 'Booking confirmed!');
    } catch (error) {
      Alert.alert('Error', 'Failed to create booking');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <ServiceInfo serviceId={serviceId} />
      <CalendarPicker
        onSlotSelect={setSelectedSlot}
        availableSlots={availableSlots}
      />
      <PaymentForm onPayment={handleBooking} />
    </ScrollView>
  );
}
```

### Backend API

```typescript
// Booking API endpoint
export async function POST(request: Request) {
  try {
    const { serviceId, userId, slot, paymentMethod } = await request.json();

    // Validate booking request
    const isValidSlot = await validateTimeSlot(serviceId, slot);
    if (!isValidSlot) {
      return Response.json({ error: 'Slot not available' }, { status: 400 });
    }

    // Process payment
    const paymentResult = await processPayment(paymentMethod, slot.price);
    if (!paymentResult.success) {
      return Response.json({ error: 'Payment failed' }, { status: 402 });
    }

    // Create booking
    const booking = await createBooking({
      serviceId,
      userId,
      slot,
      paymentId: paymentResult.id,
      status: 'confirmed',
    });

    // Send confirmation notification
    await sendNotification(userId, 'booking_confirmed', booking);

    return Response.json({ success: true, booking });
  } catch (error) {
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
```

### Real-time Updates

```typescript
// WebSocket connection for real-time updates
export function useRealTimeUpdates() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const ws = new WebSocket('wss://api.booking-app.com/ws');

    ws.onopen = () => {
      setIsConnected(true);
      setSocket(ws);
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      handleRealTimeUpdate(data);
    };

    ws.onclose = () => {
      setIsConnected(false);
      setSocket(null);
    };

    return () => ws.close();
  }, []);

  return { socket, isConnected };
}
```

## Offline Functionality

### Local Data Storage

```typescript
// Offline data management
export class OfflineManager {
  private db: SQLite.Database;

  async saveBookingOffline(booking: Booking) {
    try {
      await this.db.runAsync(
        'INSERT INTO offline_bookings (id, data, created_at) VALUES (?, ?, ?)',
        [booking.id, JSON.stringify(booking), new Date().toISOString()]
      );
    } catch (error) {
      console.error('Failed to save booking offline:', error);
    }
  }

  async syncOfflineBookings() {
    const offlineBookings = await this.db.getAllAsync(
      'SELECT * FROM offline_bookings'
    );

    for (const booking of offlineBookings) {
      try {
        await syncBooking(JSON.parse(booking.data));
        await this.db.runAsync('DELETE FROM offline_bookings WHERE id = ?', [
          booking.id,
        ]);
      } catch (error) {
        console.error('Failed to sync booking:', error);
      }
    }
  }
}
```

## Cross-Platform Compatibility

### Platform-Specific Features

```typescript
// Platform-specific implementations
import { Platform } from 'react-native';

export function getPlatformSpecificStyles() {
  return {
    container: {
      paddingTop: Platform.OS === 'ios' ? 44 : 24,
      paddingBottom: Platform.OS === 'ios' ? 34 : 24,
    },
    button: {
      borderRadius: Platform.OS === 'ios' ? 8 : 4,
    },
  };
}

// iOS-specific features
export function requestCalendarPermission() {
  if (Platform.OS === 'ios') {
    return Calendar.requestCalendarPermissionsAsync();
  }
  return Promise.resolve({ status: 'granted' });
}
```

## Performance Optimizations

### Image Optimization

```typescript
// Optimized image loading
export function OptimizedImage({ source, style }: ImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <View style={style}>
      <Image
        source={source}
        style={[style, { opacity: isLoaded ? 1 : 0 }]}
        onLoad={() => setIsLoaded(true)}
        resizeMode='cover'
      />
      {!isLoaded && <LoadingSpinner />}
    </View>
  );
}
```

### Memory Management

```typescript
// Efficient list rendering
export function BookingList({ bookings }: { bookings: Booking[] }) {
  const renderItem = useCallback(
    ({ item }: { item: Booking }) => <BookingCard booking={item} />,
    []
  );

  return (
    <FlatList
      data={bookings}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      removeClippedSubviews={true}
      maxToRenderPerBatch={10}
      windowSize={10}
    />
  );
}
```

## Testing Strategy

### Unit Testing

```typescript
// Component testing
describe('BookingScreen', () => {
  it('should display available time slots', () => {
    const mockSlots = [
      { id: '1', time: '09:00', available: true },
      { id: '2', time: '10:00', available: false },
    ];

    render(<BookingScreen serviceId='1' userId='user1' />);

    expect(screen.getByText('09:00')).toBeInTheDocument();
    expect(screen.getByText('10:00')).toBeInTheDocument();
  });
});
```

### Integration Testing

```typescript
// API integration testing
describe('Booking API', () => {
  it('should create booking successfully', async () => {
    const bookingData = {
      serviceId: 'service1',
      userId: 'user1',
      slot: { time: '09:00', date: '2024-01-15' },
    };

    const response = await fetch('/api/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bookingData),
    });

    expect(response.status).toBe(200);
    const result = await response.json();
    expect(result.success).toBe(true);
  });
});
```

## Results & Impact

### Performance Metrics

- **60% increase** in booking efficiency
- **95% user satisfaction** rate
- **30% reduction** in no-shows
- **Cross-platform compatibility** achieved

### Business Impact

- **Streamlined booking process** reducing manual work
- **Improved customer experience** with real-time updates
- **Increased revenue** through better booking management
- **Reduced administrative overhead** by 40%

## Lessons Learned

### Technical Insights

- **Real-time features** significantly improve user experience
- **Offline support** is crucial for mobile applications
- **Cross-platform development** requires careful planning
- **Payment integration** needs robust error handling

### User Experience

- **Simple booking flow** increases conversion rates
- **Clear notifications** reduce customer confusion
- **Calendar integration** improves user adoption
- **Offline functionality** enhances reliability

---

_This mobile booking system demonstrates our expertise in cross-platform mobile development and real-time applications. Contact us to discuss your mobile app development needs._
