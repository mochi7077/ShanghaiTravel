
export enum ItemCategory {
  TRANSPORT = '交通',
  FOOD = '美食',
  SIGHT = '景點',
  STAY = '住宿',
  FLIGHT = '航班',
  ACTIVITY = '活動'
}

export interface ItineraryItem {
  id: string;
  time: string;
  title: string;
  category: ItemCategory;
  duration?: string;
  notes: string;
  story?: string; // Enriched background
  tips?: string[]; // Enriched tips
  imageUrl?: string;
  location?: string;
}

export interface DailyPlan {
  date: string;
  dayOfWeek: string;
  weather: {
    temp: string;
    condition: string;
    icon: string;
  };
  items: ItineraryItem[];
}

export interface FlightInfo {
  type: 'departure' | 'return';
  airline: string;
  flightNo: string;
  route: string;
  time: string;
  terminal: string;
  notes: string;
}

export interface HotelInfo {
  name: string;
  location: string;
  checkIn: string;
  notes: string;
  image: string;
}
