"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, ArcElement, Title, Tooltip, Legend, ChartData } from 'chart.js';
import { ArrowUpIcon, ArrowDownIcon, CloudRainIcon, SunIcon, ThermometerIcon, WindIcon } from 'lucide-react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

interface KPICardProps {
  title: string;
  value: string;
  change: number;
}

interface ChartCardProps {
  title: string;
  children: React.ReactNode;
}

interface WeatherCardProps {
  day: string;
  icon: React.ReactNode;
  temp: string;
}

interface ActivityItemProps {
  text: string;
}

const Dashboard: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Default to true to handle authenticated state
  const router = useRouter();

  const barChartData: ChartData<'bar'> = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Crop Yield (tons)',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const lineChartData: ChartData<'line'> = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Rainfall (mm)',
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const pieChartData: ChartData<'pie'> = {
    labels: ['Wheat', 'Rice', 'Corn', 'Soybeans'],
    datasets: [
      {
        data: [300, 50, 100, 80],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
        ],
      },
    ],
  };

  const soilHealthData: ChartData<'doughnut'> = {
    labels: ['Nitrogen', 'Phosphorus', 'Potassium', 'pH'],
    datasets: [
      {
        data: [70, 60, 80, 75],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
        ],
      },
    ],
  };

  const handleLogout = () => {
    localStorage.getItem('token');
    setIsAuthenticated(false);
    router.push('/Login');
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setIsAuthenticated(false);
    }
  }, [router]);

  if (!isAuthenticated) {
    return null; // or a loading spinner / redirect component
  }

  return (
    <div className='min-h-screen bg-gray-900 p-8'>
      <h1 className='text-3xl font-bold mb-8 text-center text-white'>AgroMitra Dashboard</h1>
      
    

      {/* KPI Row */}
      <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mb-8'>
        <KPICard title="Total Yield" value="523 tons" change={5.2} />
        <KPICard title="Revenue" value="$1.2M" change={-2.1} />
        <KPICard title="Active Farms" value="142" change={53} />
        <KPICard title="Crop Health Index" value="87%" change={3.5} />
      </div>

      {/* Main Charts */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-8'>
        <ChartCard title="Crop Yield">
          <div className='w-full h-64'>
            <Bar data={barChartData} options={{ maintainAspectRatio: false }} />
          </div>
        </ChartCard>
        <ChartCard title="Rainfall">
          <div className='w-full h-64'>
            <Line data={lineChartData} options={{ maintainAspectRatio: false }} />
          </div>
        </ChartCard>
      </div>

      {/* Secondary Charts */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-8'>
        <ChartCard title="Crop Distribution">
          <div className='w-full h-64'>
            <Pie data={pieChartData} options={{ maintainAspectRatio: false }} />
          </div>
        </ChartCard>
        <ChartCard title="Soil Health">
          <div className='w-full h-64'>
            <Doughnut data={soilHealthData} options={{ maintainAspectRatio: false }} />
          </div>
        </ChartCard>
      </div>

      {/* Weather Forecast */}
      <div className='bg-gray-800 p-6 rounded-lg shadow-md mb-8'>
        <h2 className='text-xl font-semibold mb-4 text-white'>5-Day Weather Forecast</h2>
        <div className='grid grid-cols-5 gap-4'>
          <WeatherCard day="Mon" icon={<SunIcon />} temp="28°C" />
          <WeatherCard day="Tue" icon={<CloudRainIcon />} temp="24°C" />
          <WeatherCard day="Wed" icon={<SunIcon />} temp="30°C" />
          <WeatherCard day="Thu" icon={<WindIcon />} temp="26°C" />
          <WeatherCard day="Fri" icon={<ThermometerIcon />} temp="29°C" />
        </div>
      </div>

      {/* Recent Activity */}
      <div className='bg-gray-800 p-6 rounded-lg shadow-md'>
        <h2 className='text-xl font-semibold mb-4 text-white'>Recent Activity</h2>
        <ul className='space-y-2'>
          <ActivityItem text="New pest alert: Aphids detected in Field 3" />
          <ActivityItem text="Irrigation system activated for Field 2" />
          <ActivityItem text="Harvesting completed for Wheat in Field 1" />
          <ActivityItem text="Soil pH levels updated for all fields" />
        </ul>
      </div>
    </div>
  );
};

const KPICard: React.FC<KPICardProps> = ({ title, value, change }) => (
  <div className='bg-gray-800 p-4 rounded-lg shadow-md'>
    <h3 className='text-lg font-semibold mb-2 text-white'>{title}</h3>
    <p className='text-2xl font-bold text-white'>{value}</p>
    <p className={`flex items-center ${change > 0 ? 'text-green-500' : change < 0 ? 'text-red-500' : 'text-gray-500'}`}>
      {change > 0 ? <ArrowUpIcon size={16} /> : change < 0 ? <ArrowDownIcon size={16} /> : null}
      {Math.abs(change)}%
    </p>
  </div>
);

const ChartCard: React.FC<ChartCardProps> = ({ title, children }) => (
  <div className='bg-gray-800 p-6 rounded-lg shadow-md'>
    <h2 className='text-xl font-semibold mb-4 text-white'>{title}</h2>
    {children}
  </div>
);

const WeatherCard: React.FC<WeatherCardProps> = ({ day, icon, temp }) => (
  <div className='bg-gray-700 p-4 rounded-lg text-center'>
    <p className='text-white font-semibold'>{day}</p>
    <div className='text-white my-2'>{icon}</div>
    <p className='text-white'>{temp}</p>
  </div>
);

const ActivityItem: React.FC<ActivityItemProps> = ({ text }) => (
  <li className='bg-gray-700 p-3 rounded-lg text-white'>{text}</li>
);

export default Dashboard;
