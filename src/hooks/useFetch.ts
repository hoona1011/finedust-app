import { useState, useEffect, useCallback, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from 'store';
import { storeInfos } from 'store/slices/dustSlice';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function useFetch() {
  const [sido, setSido] = useState('서울');
  const [myRegion, setMyRegion] = useState('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const dustData = useAppSelector((state) => state.dust.dustInfos);

  const dustParams = useMemo(() => {
    return {
      serviceKey:
        '1F7V6macQRg0rywcj3AxM6F/+evoyTixrYuXaywSXqEB4xN4fTorHoOMAcbEyiH5w3h6WKHibYqjtsH5/zvNjg==',
      returnType: 'json',
      numOfRows: '100',
      pageNo: '1',
      sidoName: sido,
      ver: '1.0',
    };
  }, [sido]);

  const getInfos = useCallback(async () => {
    try {
      const res = await axios.get('/api', {
        params: dustParams,
      });
      const responseData = res?.data.response.body.items;
      // setdustInfos(responseData);
      dispatch(storeInfos(responseData));
    } catch {
      // eslint-disable-next-line no-alert
      alert('네트워크 에러가 발생했습니다');
      navigate('/');
    }
  }, [dustParams, dispatch, navigate]);

  useEffect(() => {
    getInfos();
  }, [getInfos, sido]);

  return { sido, setSido, dustData, myRegion, setMyRegion };
}

export default useFetch;
