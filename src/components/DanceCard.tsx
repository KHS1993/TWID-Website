// src/components/DanceCard.tsx

type DanceCardProps = {
  title: string;
  description: string;
};

export default function DanceCard({ title, description }: DanceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
