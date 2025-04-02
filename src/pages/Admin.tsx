
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/context/AuthContext";
import { recipes } from "@/data/recipes";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

type MockUser = {
  id: string;
  name: string;
  email: string;
  lastVisit: string;
  favoritesCount: number;
  joinDate: string;
};

// Mock data
const mockUsers: MockUser[] = [
  {
    id: "u1",
    name: "John Doe",
    email: "john@example.com",
    lastVisit: "2023-05-15",
    favoritesCount: 8,
    joinDate: "2023-01-10",
  },
  {
    id: "u2",
    name: "Jane Smith",
    email: "jane@example.com",
    lastVisit: "2023-05-16",
    favoritesCount: 12,
    joinDate: "2023-02-05",
  },
  {
    id: "u3",
    name: "Mike Johnson",
    email: "mike@example.com",
    lastVisit: "2023-05-14",
    favoritesCount: 5,
    joinDate: "2023-03-20",
  },
  {
    id: "u4",
    name: "Lisa Brown",
    email: "lisa@example.com",
    lastVisit: "2023-05-10",
    favoritesCount: 15,
    joinDate: "2023-01-15",
  },
  {
    id: "u5",
    name: "David Wilson",
    email: "david@example.com",
    lastVisit: "2023-05-12",
    favoritesCount: 3,
    joinDate: "2023-04-02",
  },
  {
    id: "u6",
    name: "Admin User",
    email: "admin@foodiecraft.com",
    lastVisit: "2023-05-17",
    favoritesCount: 0,
    joinDate: "2023-01-01",
  },
  {
    id: "u7",
    name: "Test User",
    email: "user@foodiecraft.com",
    lastVisit: "2023-05-17",
    favoritesCount: 7,
    joinDate: "2023-01-01",
  },
];

const COLORS = ["#FF0000", "#0088FE", "#00C49F", "#FFBB28"];

const Admin = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const { user } = useAuth();
  
  // Recipe analytics
  const recipesByCategory = [
    { name: "Diabetes", value: recipes.filter(r => r.category === "diabetes").length },
    { name: "Heart Health", value: recipes.filter(r => r.category === "heart-disease").length },
    { name: "Ulcer", value: recipes.filter(r => r.category === "ulcer").length },
    { name: "General", value: recipes.filter(r => r.category === "general").length },
  ];
  
  // Average cooking time by category
  const cookingTimeByCategory = [
    { 
      name: "Diabetes", 
      avgTime: Math.round(
        recipes
          .filter(r => r.category === "diabetes")
          .reduce((acc, recipe) => acc + recipe.cookTime + recipe.prepTime, 0) / 
        Math.max(1, recipes.filter(r => r.category === "diabetes").length)
      )
    },
    { 
      name: "Heart Health", 
      avgTime: Math.round(
        recipes
          .filter(r => r.category === "heart-disease")
          .reduce((acc, recipe) => acc + recipe.cookTime + recipe.prepTime, 0) / 
        Math.max(1, recipes.filter(r => r.category === "heart-disease").length)
      )
    },
    { 
      name: "Ulcer", 
      avgTime: Math.round(
        recipes
          .filter(r => r.category === "ulcer")
          .reduce((acc, recipe) => acc + recipe.cookTime + recipe.prepTime, 0) / 
        Math.max(1, recipes.filter(r => r.category === "ulcer").length)
      )
    },
    { 
      name: "General", 
      avgTime: Math.round(
        recipes
          .filter(r => r.category === "general")
          .reduce((acc, recipe) => acc + recipe.cookTime + recipe.prepTime, 0) / 
        Math.max(1, recipes.filter(r => r.category === "general").length)
      )
    },
  ];
  
  // Calculate total users and favorites
  const totalUsers = mockUsers.length;
  const totalFavorites = mockUsers.reduce((acc, user) => acc + user.favoritesCount, 0);
  const avgFavoritesPerUser = totalFavorites / totalUsers;
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Welcome, {user?.name}</h2>
        <p className="text-gray-600">
          This is your administrative dashboard where you can monitor users, recipes, and website analytics.
        </p>
      </div>
      
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">
              Total Users
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{totalUsers}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">
              Total Recipes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{recipes.length}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">
              Avg. Favorites per User
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{avgFavoritesPerUser.toFixed(1)}</div>
          </CardContent>
        </Card>
      </div>
      
      {/* Tabs for different sections */}
      <Tabs defaultValue="users" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="recipes">Recipes</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>
        
        {/* Users Tab */}
        <TabsContent value="users">
          <Card>
            <CardHeader>
              <CardTitle>Registered Users</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Join Date</TableHead>
                      <TableHead>Last Visit</TableHead>
                      <TableHead>Favorites</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockUsers.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.joinDate}</TableCell>
                        <TableCell>{user.lastVisit}</TableCell>
                        <TableCell>{user.favoritesCount}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Recipes Tab */}
        <TabsContent value="recipes">
          <Card>
            <CardHeader>
              <CardTitle>Recipe Overview by Category</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={recipesByCategory}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#FF0000" name="Recipes" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              
              <div className="mt-8">
                <h3 className="font-semibold mb-4">Recipe Count by Category</h3>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Category</TableHead>
                        <TableHead className="text-right">Recipe Count</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {recipesByCategory.map((cat) => (
                        <TableRow key={cat.name}>
                          <TableCell>{cat.name}</TableCell>
                          <TableCell className="text-right">{cat.value}</TableCell>
                        </TableRow>
                      ))}
                      <TableRow>
                        <TableCell className="font-bold">Total</TableCell>
                        <TableCell className="text-right font-bold">
                          {recipesByCategory.reduce((acc, cat) => acc + cat.value, 0)}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Analytics Tab */}
        <TabsContent value="analytics">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Recipe Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={recipesByCategory}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {recipesByCategory.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Average Recipe Preparation Time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={cookingTimeByCategory}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="avgTime" fill="#00C49F" name="Minutes" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-sm text-gray-500 mt-4 text-center">
                  Average total time (prep + cook) in minutes
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Admin;
