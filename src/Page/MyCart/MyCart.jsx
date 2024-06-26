import { useEffect, useState } from "react";
import Swal from "sweetalert2";



const MyCart = () => {
  const [cartData, setCartData] = useState([]);
  // const {loading} = useContext(AuthContext);

  useEffect(() => {
    fetch('http://localhost:5000/cart')
      .then(res => res.json())
      .then(data => setCartData(data))
  }, [])

  const handleDelet = id => {
    fetch(`http://localhost:5000/cart/${id}`, {
      method: "DELETE"
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Sucessfully deleted",
            icon: "question"
          });
          const remaining = cartData.filter(data => data._id !== id);
          setCartData(remaining);
        }
      })
  }



  return (
    <div>
      
      <div className="h-24">

      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="font-bold text-xl">
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
              {/* <th>Action</th> */}
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              cartData?.map(cart => <tr key={cart._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-16 h-16">
                        <img src={cart.image} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{cart.name}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="bg-slate-200 rounded-md">$ {cart.price}</span>
                </td>
                {/* <td>Buy Now</td> */}
                <th>
                  <button onClick={() => handleDelet(cart._id)} className="btn btn-ghost btn-xs text-red-400">Delet</button>
                </th>
              </tr>)
            }
          </tbody>
        </table>
      </div>


    </div>
  );
};

export default MyCart;