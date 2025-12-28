
import React, { useState, useMemo } from 'react';
import { ITINERARY, FLIGHTS, HOTEL } from './data';
import { ItemCategory, ItineraryItem } from './types';
import { TransportIcon, FoodIcon, SightIcon, FlightIcon, HotelIcon, ActivityIcon } from './components/Icons';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'itinerary' | 'info'>('itinerary');
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState<ItineraryItem | null>(null);

  const getCategoryIcon = (category: ItemCategory) => {
    switch (category) {
      case ItemCategory.TRANSPORT: return <TransportIcon />;
      case ItemCategory.FOOD: return <FoodIcon />;
      case ItemCategory.SIGHT: return <SightIcon />;
      case ItemCategory.FLIGHT: return <FlightIcon />;
      case ItemCategory.STAY: return <HotelIcon />;
      case ItemCategory.ACTIVITY: return <ActivityIcon />;
      default: return null;
    }
  };

  const getCategoryColor = (category: ItemCategory) => {
    switch (category) {
      case ItemCategory.TRANSPORT: return 'bg-blue-50 text-blue-600 border-blue-200';
      case ItemCategory.FOOD: return 'bg-orange-50 text-orange-600 border-orange-200';
      case ItemCategory.SIGHT: return 'bg-green-50 text-green-600 border-green-200';
      case ItemCategory.FLIGHT: return 'bg-purple-50 text-purple-600 border-purple-200';
      case ItemCategory.STAY: return 'bg-brown-50 text-amber-800 border-amber-200';
      case ItemCategory.ACTIVITY: return 'bg-red-50 text-red-600 border-red-200';
      default: return 'bg-gray-50 text-gray-600 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen pb-20 safe-area-top overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-[#b91c1c] text-white px-6 py-4 shadow-lg flex justify-between items-center">
        <h1 className="serif text-2xl font-bold tracking-widest">滬上漫步</h1>
        <div className="flex gap-4">
          <button 
            onClick={() => setActiveTab('itinerary')}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${activeTab === 'itinerary' ? 'bg-white text-[#b91c1c]' : 'text-white/80'}`}
          >
            每日行程
          </button>
          <button 
            onClick={() => setActiveTab('info')}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${activeTab === 'info' ? 'bg-white text-[#b91c1c]' : 'text-white/80'}`}
          >
            航班住宿
          </button>
        </div>
      </header>

      <main className="max-w-md mx-auto p-4">
        {activeTab === 'itinerary' ? (
          <>
            {/* Day Selector */}
            <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
              {ITINERARY.map((day, idx) => (
                <button
                  key={day.date}
                  onClick={() => setSelectedDayIndex(idx)}
                  className={`flex-shrink-0 px-4 py-2 rounded-xl border-2 transition-all ${
                    selectedDayIndex === idx 
                      ? 'border-[#b91c1c] bg-[#b91c1c] text-white shadow-md' 
                      : 'border-gray-200 bg-white text-gray-600'
                  }`}
                >
                  <div className="text-xs opacity-80">{day.date.split('/')[1]}/{day.date.split('/')[2]}</div>
                  <div className="font-bold">{day.dayOfWeek}</div>
                </button>
              ))}
            </div>

            {/* Weather Card */}
            <div className="bg-white rounded-2xl p-4 mb-6 shadow-sm border border-amber-100 flex items-center justify-between">
              <div>
                <h3 className="text-gray-500 text-sm">預測天氣 - 上海</h3>
                <p className="text-xl font-bold text-gray-800">{ITINERARY[selectedDayIndex].weather.condition}</p>
              </div>
              <div className="text-right">
                <span className="text-4xl mb-1 block">{ITINERARY[selectedDayIndex].weather.icon}</span>
                <p className="text-sm font-medium text-gray-600">{ITINERARY[selectedDayIndex].weather.temp}</p>
              </div>
            </div>

            {/* Itinerary Timeline */}
            <div className="relative pl-8 space-y-6 before:content-[''] before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-amber-200">
              {ITINERARY[selectedDayIndex].items.map((item) => (
                <div 
                  key={item.id} 
                  className="relative group cursor-pointer"
                  onClick={() => setSelectedItem(item)}
                >
                  <div className={`absolute -left-[29px] top-1 w-6 h-6 rounded-full border-4 border-white shadow-sm flex items-center justify-center ${getCategoryColor(item.category)}`}>
                    <div className="w-2 h-2 rounded-full bg-current"></div>
                  </div>
                  <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 group-active:scale-95 transition-transform">
                    <div className="flex justify-between items-start mb-1">
                      <span className="text-[#b91c1c] font-bold text-sm tracking-tighter serif">{item.time}</span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full border ${getCategoryColor(item.category)}`}>
                        {item.category}
                      </span>
                    </div>
                    <h3 className="font-bold text-gray-800 mb-1">{item.title}</h3>
                    {item.duration && <p className="text-xs text-amber-600 mb-1">⏳ {item.duration}</p>}
                    <p className="text-xs text-gray-500 line-clamp-2 whitespace-pre-line leading-relaxed">{item.notes}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="space-y-6 animate-in fade-in duration-500">
            {/* Flights */}
            <section>
              <h2 className="serif text-xl font-bold mb-4 border-l-4 border-[#b91c1c] pl-3">航班資訊</h2>
              <div className="space-y-4">
                {FLIGHTS.map((f, i) => (
                  <div key={i} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-2 mb-2">
                      <FlightIcon />
                      <span className="font-bold text-[#b91c1c]">{f.flightNo}</span>
                      <span className="text-gray-400 text-sm ml-auto">{f.airline}</span>
                    </div>
                    <p className="text-lg font-bold mb-1">{f.route}</p>
                    <p className="text-sm text-gray-600 mb-2">🕒 {f.time}</p>
                    <p className="text-xs text-gray-500 bg-gray-50 p-2 rounded-lg whitespace-pre-line leading-relaxed">
                      {f.notes}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Hotel */}
            <section>
              <h2 className="serif text-xl font-bold mb-4 border-l-4 border-[#b91c1c] pl-3">住宿資訊</h2>
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <img src={HOTEL.image} alt="Hotel" className="w-full h-40 object-cover" />
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <HotelIcon />
                    <h3 className="font-bold text-lg">{HOTEL.name}</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">📍 {HOTEL.location}</p>
                  <p className="text-sm text-gray-600 mb-3">📅 入住：{HOTEL.checkIn}</p>
                  <div className="bg-amber-50 text-amber-800 p-3 rounded-xl text-xs leading-relaxed whitespace-pre-line">
                    <strong>小提醒：</strong>{'\n'}{HOTEL.notes}
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}
      </main>

      {/* Detail Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white w-full max-w-md rounded-t-3xl sm:rounded-3xl max-h-[90vh] overflow-y-auto relative animate-in slide-in-from-bottom duration-300">
            <button 
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 bg-black/20 text-white w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md"
            >
              ✕
            </button>
            
            {selectedItem.imageUrl && (
              <img src={selectedItem.imageUrl} alt={selectedItem.title} className="w-full h-64 object-cover" />
            )}
            
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className={`p-2 rounded-xl ${getCategoryColor(selectedItem.category)}`}>
                  {getCategoryIcon(selectedItem.category)}
                </span>
                <span className="text-sm font-bold text-[#b91c1c] serif">{selectedItem.time}</span>
              </div>
              
              <h2 className="text-2xl font-bold mb-2 text-gray-800">{selectedItem.title}</h2>
              
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">小提醒</h4>
                  <p className="text-gray-700 whitespace-pre-line leading-relaxed">{selectedItem.notes}</p>
                </div>

                {selectedItem.story && (
                  <div>
                    <h4 className="serif text-lg font-bold text-amber-800 mb-1">景點簡介</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{selectedItem.story}</p>
                  </div>
                )}

                {selectedItem.tips && selectedItem.tips.length > 0 && (
                  <div className="bg-amber-50 p-4 rounded-2xl">
                    <h4 className="text-sm font-bold text-amber-800 mb-2">💡 攻略小撇步</h4>
                    <ul className="space-y-3">
                      {selectedItem.tips.map((tip, i) => (
                        <li key={i} className="text-sm text-amber-900 flex gap-2 whitespace-pre-line">
                          <span className="text-amber-400 mt-1">•</span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Nav Hint */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-gray-100 px-6 py-3 flex justify-around items-center sm:hidden">
        <div className="text-[10px] text-gray-400 text-center italic serif">「 滬上漫步 · 二零二六 」</div>
      </nav>
    </div>
  );
};

export default App;
