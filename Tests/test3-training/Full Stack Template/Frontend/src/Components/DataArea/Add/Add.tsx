import { useState, useEffect } from 'react';
import { AudienceModel } from '../../../Models/AudienceModel';
import { dataService } from '../../../Services/DataService';
import { notify } from '../../../Utils/Notify';
import './Add.css';
import { GiftModel } from '../../../Models/GiftModel';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Add(): JSX.Element {
  const [audiences, setAudiences] = useState<AudienceModel[]>([]);
  const { register, handleSubmit } = useForm<GiftModel>();
  const navigate = useNavigate();

  useEffect(() => {
    dataService
      .getAllAudiences()
      .then((audiences) => setAudiences(audiences))
      .catch((err) => notify.error(err));
  }, []);

  async function send(gift: GiftModel) {
    try {
      await dataService.addGift(gift);
      notify.success('Gift has been added');
      navigate('/list');
    } catch (error: any) {
      notify.error(error);
    }
    console.log(gift);
  }

  return (
    <div className="Add">
      <form onSubmit={handleSubmit(send)}>
        <label>Select audience</label>
        <select
          defaultValue=""
          className="form-control"
          {...register('audienceId')}
          required
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

        <label>Name:</label>
        <input type="text" className="form-control" {...register('name')} />

        <label>Description:</label>
        <input
          type="text"
          className="form-control"
          {...register('description')}
          required
        />

        <label>Price:</label>
        <input
          type="number"
          step="0.01"
          className="form-control"
          {...register('price')}
          required
          min={0}
        />

        <label>Discount:</label>
        <input
          type="number"
          className="form-control"
          {...register('discount')}
          required
          min={0}
          max={100}
        />

        <button className="btn btn-primary">Add gift</button>
      </form>
    </div>
  );
}

export default Add;
