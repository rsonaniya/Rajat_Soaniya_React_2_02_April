import React from "react";

export default function TableRow({ data }) {
  console.log(data.data);
  return (
    <tbody>
      {data.map((item, index) => (
        <tr key={index}>
          <td className="text-center">
            <img
              src={item.image}
              style={{ width: "30px" }}
              className="mx-2"
              alt={item.id}
            />
            <span>{item.symbol}</span>
          </td>
          <td className="text-center">{item.name}</td>
          <td className="text-center">${item.current_price}</td>
          <td className="text-center">${item.market_cap}</td>
          <td
            className={
              item.price_change_percentage_24h < 0
                ? "text-danger text-center"
                : "text-success text-center"
            }
          >
            {String(item.price_change_percentage_24h).slice(0, 5)}%
          </td>
        </tr>
      ))}
    </tbody>
  );
}
