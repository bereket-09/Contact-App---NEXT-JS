import { useRef } from "react";

function ContactForm(props:any) {
  let firstName = useRef<HTMLInputElement>(null);
  let lastName = useRef<HTMLInputElement>(null);
  let phoneNumber = useRef<HTMLInputElement>(null);

  function submitHandler(event: any) {
    event.preventDefault();

    const fName = firstName.current?.value;
    const lName = lastName.current?.value;
    const phone = phoneNumber.current?.value;

    const ContactData = {
      firstName: fName,
      lastName: lName,
      phoneNumber: phone,
    };
    console.log(
      "🚀 ~ file: index.tsx:20 ~ submitHandler ~ ContactData",
      ContactData
    );
        props.onAddContact(ContactData)
}

  return (
    <div>
      <div>
        <h1 className="flex justify-center mt-5 mb-1 block text-base text-[#07074D]  font-extrabold">
          Create New Contact
        </h1>
      </div>
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px]">
          <form onSubmit={submitHandler}>
            <div className="mb-5">
              <label
                htmlFor="fname"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                First Name
              </label>
              <input
                type="text"
                name="name"
                id="fname"
                placeholder="First Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                ref={firstName}
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="name"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Last Name
              </label>
              <input
                required
                type="text"
                name="name"
                id="name"
                placeholder="Last Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                ref={lastName}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="subject"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Phone Number
              </label>
              <input
                type="text"
                minLength="10"
                maxLength="14"
                name="subject"
                id="subject"
                placeholder="Enter your Phone Number"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                required
                ref={phoneNumber}
              />
            </div>
            <div>
              <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
