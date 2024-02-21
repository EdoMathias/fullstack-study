import { ChangeEvent, useEffect, useState } from 'react';
import './List.css';
import { AudienceModel } from '../../../Models/AudienceModel';
import { dataService } from '../../../Services/DataService';
import { notify } from '../../../Utils/Notify';
import { GiftModel } from '../../../Models/GiftModel';

function List(): JSX.Element {
  const [audiences, setAudiences] = useState<AudienceModel[]>([]);
  const [gifts, setGifts] = useState<GiftModel[]>([]);

  useEffect(() => {
    dataService
      .getAllAudiences()
      .then((audiences) => setAudiences(audiences))
      .catch((err) => notify.error(err));
  }, []);

  async function displayGifts(args: ChangeEvent<HTMLSelectElement>) {
    try {
      const select = args.target;
      const audienceId = +select.value;
      const gifts = await dataService.getGiftsByAudience(audienceId);
      setGifts(gifts);
    } catch (error: any) {
      notify.error(error);
    }
  }

  return (
    <div className="List">
      <select
        defaultValue=""
        onChange={displayGifts}
        className="form-control w-25 m-5 mx-auto"
      >
        <option value="" disabled>
          Select target audience
        </option>
        {audiences.map((audience) => (
          <option key={audience.id} value={audience.id}>
            {audience.name}
          </option>
        ))}
      </select>

      <table className="table table-bordered table-hover w-75 mx-auto">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Discount</th>
          </tr>
        </thead>
        <tbody>
          {gifts.map((gift) => (
            <tr key={gift.id}>
              <td>{gift.name}</td>
              <td>{gift.description}</td>
              <td>{gift.price}</td>
              <td>{gift.discount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default List;
