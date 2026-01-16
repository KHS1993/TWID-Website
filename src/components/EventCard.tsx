// Named export istället för default
export type EventCardProps = {
  name: string;
  date: string;
  location: string;
  description: string;
};

export function EventCard({ name, date, location, description }: EventCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:scale-105 transition-transform">
      <h3 className="text-xl font-semibold mb-1">{name}</h3>
      <p className="text-gray-500 text-sm mb-2">{date} • {location}</p>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}
