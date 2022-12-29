function SingleContactList(props: any) {
  return (
    <tr className="bg-gray-100 border-b">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {props.id}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {props.firstName}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {props.lastName}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {props.phoneNumber}
      </td>
    </tr>
  );
}

export default SingleContactList;
