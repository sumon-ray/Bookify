"use client"
import axios from "axios";


const AddCraft = () => {

  async function addCraft(e) {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const description = e.target.description.value;
    const price = e.target.price.value;
    const rating = e.target.rating.value;
    const customization = e.target.customization.value;
    const processing = e.target.processing.value;
    const subcategory = e.target.subcategory.value;
    const stock = e.target.stock.value;
    let image = e.target.fileInput.files[0]
    const formData = new FormData();
    formData.append('image', image)
    const { data } = await axios.post('https://api.imgbb.com/1/upload?key=52396a4930fb920fb80bbebb2b3fe41d', formData)

    console.log(data.data)
    const Item = e.target.Item.value;
    const Data = { name, email, description, price, rating, customization, processing, subcategory, stock, image: data.data.display_url, Item }
    axios.post('https://ph-10-as-server.vercel.app/ArtCraft', Data)
      .then(data => {
        if (data.data.insertedId) {
          toast.success('Craft added successful');
          e.target.reset()
        }
      })

  }


  return (
    <section className="space-y-6 pb-12">

      <div className="bg-[#EFEEE9] rounded-md p-6">
        <h1 className="text-3xl font-black uppercase text-center">Add your book</h1>
      </div>

      <form onSubmit={addCraft}>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 *:space-y-0.5">

            <div className="col-span-full  sm:col-span-2 ">
              <label className="text-sm uppercase">name</label>
              <input id="name" type="text" placeholder="Name" value={''} className="w-full rounded-md text-black pl-1" required />
            </div>

            <div className="col-span-full sm:col-span-2">
              <label className="text-sm uppercase">email</label>
              <input type="email" name="email" placeholder="Email" value={''} className="w-full rounded-md text-black   pl-1" required />
            </div>

            <div className="col-span-full sm:col-span-2">
              <label htmlFor="email" className="text-sm uppercase">description</label>
              <input id="description" type="text" placeholder="Description" className="w-full rounded-md text-black pl-1 " required />
            </div>

            <div className="col-span-full sm:col-span-2">
              <label htmlFor="address" className="text-sm uppercase">price</label>
              <input id="price" type="text" placeholder="Price" className="w-full rounded-md text-black pl-1 " required />
            </div>

            <div className="col-span-full sm:col-span-2 uppercase">
              <label htmlFor="city" className="text-sm">rating</label>
              <input id="rating" type="number" min={'1'} max={'5'} placeholder="Rating" className="w-full rounded-md  text-black pl-1" required />
            </div>

            <div className="col-span-full sm:col-span-2">
              <label htmlFor="state" className="text-sm uppercase">Condition</label>
              <input id="customization" type="text" placeholder="Condition" className="w-full rounded-md pl-1 text-black" required />
            </div>

            <div className="col-span-full sm:col-span-2">
              <label className="text-sm uppercase">exchange Status</label>
              <input id="processing" type="text" placeholder='Status'
                className="w-full rounded-md text-black pl-1 " required />
            </div>

            <div className="col-span-full sm:col-span-2">
              <label className="text-sm uppercase">category </label>
              <input id="Category" type="text" placeholder="Category" className="w-full rounded-md text-black pl-1 " required />
            </div>

            <div className="col-span-full sm:col-span-2">
              <label className="text-sm uppercase">total Page</label>
              <input id="stock" type="text" placeholder="Total Page" className="w-full rounded-md text-black pl-1 " required />
            </div>

            <div className="col-span-full sm:col-span-2">
              <label className="text-sm uppercase block">Photo url</label>
              <input type="file" name="fileInput" className="file-input  file-input-xs w-full max-w-xs pt-0.5 rounded-md" />
            </div>

            <div className="col-span-full sm:col-span-2">
              <label className="text-sm uppercase">location</label>
              <input id="Item" type="text" placeholder="Location" className="w-full rounded-md text-black pl-1 " required />
            </div>

            <div className="col-span-full sm:col-span-2 md:relative">
              <button type="button" className="text-white bg-black focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm uppercase w-full md:h-[65.5%] md:absolute p-4 md:p-0 md:bottom-0">Add to cart</button>
            </div>

          </div>
      </form>

    </section>
  );
};

export default AddCraft;