import { useNavigate, useParams } from "react-router-dom";
import { useGetDealerQuery } from "../../services/dealerAPI";
import { IoChevronBack } from "react-icons/io5";

const AdminDealerInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const { data, isLoading, isError, error } = useGetDealerQuery(id);
  console.log(isLoading);
  console.log(isError);
  console.log(error);
  console.log(data);

  const { dealerDto: { firstName, lastName, mobileNo, shopName, area, email, city, address } = {} } = data || {};
  
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-4xl flex flex-col md:flex-row shadow-lg">
        <div className="w-full md:w-1/2">
          <img 
            src="https://www.shutterstock.com/image-photo/smiling-friendly-car-seller-suit-600nw-2105619599.jpg" 
            alt="Dealer"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-between">
          <div>
            <table className="table w-full ml-2 border-collapse border border-gray-200">
              <tbody>
                <tr>
                  <th className="px-4 py-2 border border-gray-200">First Name</th>
                  <td className="px-4 py-2 border border-gray-200">{firstName}</td>
                </tr>
                <tr>
                  <th className="px-4 py-2 border border-gray-200">Last Name</th>
                  <td className="px-4 py-2 border border-gray-200">{lastName}</td>
                </tr>
                <tr>
                  <th className="px-4 py-2 border border-gray-200">Mobile Number</th>
                  <td className="px-4 py-2 border border-gray-200">{mobileNo}</td>
                </tr>
                <tr>
                  <th className="px-4 py-2 border border-gray-200">Shop Name</th>
                  <td className="px-4 py-2 border border-gray-200">{shopName}</td>
                </tr>
                <tr>
                  <th className="px-4 py-2 border border-gray-200">Area</th>
                  <td className="px-4 py-2 border border-gray-200">{area}</td>
                </tr>
                <tr>
                  <th className="px-4 py-2 border border-gray-200">Email</th>
                  <td className="px-4 py-2 border border-gray-200">{email}</td>
                </tr>
                <tr>
                  <th className="px-4 py-2 border border-gray-200">City</th>
                  <td className="px-4 py-2 border border-gray-200">{city}</td>
                </tr>
                <tr>
                  <th className="px-4 py-2 border border-gray-200">Address</th>
                  <td className="px-4 py-2 border border-gray-200">{address}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex justify-center items-center mt-4 md:mt-0">
            <span className="flex"><IoChevronBack 
              className="w-10 h-10 cursor-pointer hover:shadow-lg hover:bg-gray-500 p-2 hover:border-gray-700 rounded-full"
              onClick={() => navigate(-1)} 
            /><p className="mt-2 ml-2">Back</p></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDealerInfo;
