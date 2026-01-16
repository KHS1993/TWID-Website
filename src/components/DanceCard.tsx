export type DanceCardProps = {
  title: string;
  description: string;
};

export function DanceCard({ title, description }: DanceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:scale-105 transition-transform">
      <h3 className="text-xl font-semibold mb-1">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}
