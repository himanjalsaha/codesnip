import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Developer-Friendly",
      description:
        "Designed specifically for developers, providing tools to efficiently manage and organize your code snippets.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Easy to Use",
      description:
        "Our intuitive interface makes it simple to save, organize, and retrieve your code snippets.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Competitive Pricing",
      description:
        "Offering the best value for a code snippet manager, with no hidden fees or credit card requirements.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Reliable Performance",
      description: "Enjoy 100% uptime and seamless access to your code snippets whenever you need them.",
      icon: <IconCloud />,
    },
    {
      title: "Collaborative Features",
      description: "Share code snippets with your team effortlessly and collaborate in real time.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "24/7 Support",
      description:
        "Our AI-powered support is available around the clock to assist you with any issues.",
      icon: <IconHelp />,
    },
    {
      title: "Satisfaction Guaranteed",
      description:
        "If you're not satisfied with Code Snip, we'll work with you to ensure you have a great experience.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "AI Integration",
      description: "Enhance your coding experience with AI-powered suggestions and automation.",
      icon: <IconHeart />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative  h-screen py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
