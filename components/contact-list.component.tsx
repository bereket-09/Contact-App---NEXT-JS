import SingleContactList from "./single-contactlist-row.component"

export default function ContactList(props:any) {

    
  return (
    <div className="flex flex-col">
  <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-white border-b">
            <tr>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                #
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                First Name
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Last Name
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Mobile Number
              </th>
            </tr>
          </thead>
          <tbody>
          {props?.data?.map((contact:any) => (
           
            
             <SingleContactList
             key={contact.id}
             id={contact.id}
             firstName={contact.firstName}
             lastName={contact.lastName}
             phoneNumber={contact.phoneNumber}></SingleContactList>))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>  );

}


