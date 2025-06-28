const StatusBadge = ({ status }: { status: string }) => {
  const showIcon = status.toLowerCase() === "active";
  const size = "medium";
  // Define status configurations
  const statusConfig: {
    [key: string]: {
      text: string;
      bgColor: string;
      textColor: string;
      icon: string;
    };
  } = {
    active: {
      text: "Active",
      bgColor: "bg-green-50",
      textColor: "text-green-700",
      icon: "✓",
    },
    "in active": {
      text: "In Active",
      bgColor: "bg-orange-400",
      textColor: "text-white",
      icon: "○",
    },
  };

  const sizeConfig = {
    small: "px-2 py-1 text-xs",
    medium: "px-3 py-1 text-sm",
    large: "px-4 py-2 text-base",
  };

  const config = statusConfig[status.toLowerCase()] || statusConfig.active;
  const sizeClasses = sizeConfig[size];

  const baseClasses = `
    inline-flex items-center gap-1 rounded-full font-medium
    ${config.bgColor} ${config.textColor} ${sizeClasses}
  `.trim();

  return (
    <span className={baseClasses}>
      {showIcon && <span className="text-xs">{config.icon}</span>}
      {config.text}
    </span>
  );
};

export default StatusBadge;
