import { motion } from "framer-motion";
import { Edit, Search, Trash2 } from "lucide-react";
import { useState } from "react";

const PRODUCT_DATA = [
  { id: 1, name: " Anuv Jain", category: "Electronics", revenue: 5934234.99, Deals: 14300, sales: 12005 },
  { id: 2, name: " Diljeet Chopra", category: "Clothes  ", revenue: 397777.99, Deals: 8900, sales: 8005 },
  { id: 3, name: "john singh", category: "Electronics", revenue: 199999.99, Deals: 5656430, sales: 6505 },
  { id: 4, name: "Rahul Yadav", category: "Fitness", revenue: 290000.99, Deals: 21089654, sales: 9553250 },
  { id: 5, name: "Yash Dholiwal", category: "Home", revenue: 1000.99, Deals: 7868765645, sales: 75520 },
];

const ProductsTable = () => {
  const [products, setProducts] = useState(PRODUCT_DATA);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleEdit = (productId) => {
    const newProductName = prompt("Enter new product name:");
    if (!newProductName) return;
    setProducts((prev) =>
      prev.map((product) =>
        product.id === productId ? { ...product, name: newProductName } : product
      )
    );
  };

  const handleDelete = (productId) => {
    const confirmDelete = confirm("Are you sure you want to delete this product?");
    if (confirmDelete) {
      setProducts((prev) => prev.filter((product) => product.id !== productId));
    }
  };

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm)
  );

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-100">Retailers List</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search products..."
            className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleSearch}
            value={searchTerm}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                revenue
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Deals
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Sales
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                location
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-700">
            {filteredProducts.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center text-gray-400 py-4">
                  No products found.
                </td>
              </tr>
            ) : (
              filteredProducts.map((product) => (
                <motion.tr
                  key={product.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 flex gap-2 items-center">
                    <img
                      src="https://images.unsplash.com/photo-1627989580309-bfaf3e58af6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2lyZWxlc3MlMjBlYXJidWRzfGVufDB8fDB8fHww"
                      alt="Product img"
                      className="size-10 rounded-full"
                    />
                    {product.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    {product.category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    ${product.revenue.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    {product.Deals}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    {product.sales}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    <button
                      className="text-indigo-400 hover:text-indigo-300 mr-2"
                      onClick={() => handleEdit(product.id)}
                    >
                      <Edit size={18} />
                    </button>
                    <button
                      className="text-red-400 hover:text-red-300"
                      onClick={() => handleDelete(product.id)}
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </motion.tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default ProductsTable;
