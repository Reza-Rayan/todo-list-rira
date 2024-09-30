interface TaskCardProps {
  title: string;
  date: string;
}

const TaskCard = ({ title, date }: TaskCardProps) => {
  return (
    <div className="bg-[#21212160] rounded-xl p-6 flex items-center justify-between gap-6">
      <div className="flex gap-2">
        <input type="checkbox" className="bg-indigo-600" />
        <h2 className="text-lg">{title}</h2>
      </div>
      <span>{date}</span>
    </div>
  );
};

export default TaskCard;
