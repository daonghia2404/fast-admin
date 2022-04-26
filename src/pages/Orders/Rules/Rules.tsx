/* eslint-disable react/no-danger */
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { TRootState } from '@/redux/reducers';
import { EArticleControllerAction } from '@/redux/actions/article-controller/constants';
import ImageRules from '@/assets/images/image-rules.png';
import Loading from '@/containers/Loading';
import { getRuleAction } from '@/redux/actions';

import './Rules.scss';

const Rules: React.FC = () => {
  const dispatch = useDispatch();

  const ruleData = useSelector((state: TRootState) => state.articleReducer.rule);
  const getRuleLoading = useSelector((state: TRootState) => state.loadingReducer[EArticleControllerAction.GET_RULE]);
  const ruleContent = ruleData?.data?.ListArticle?.[0];

  const getRulesData = useCallback(() => {
    dispatch(getRuleAction.request());
  }, [dispatch]);

  useEffect(() => {
    getRulesData();
  }, [getRulesData]);

  return (
    <div className="Rules">
      {/* {getRuleLoading ? (
        <Loading />
      ) : (
        <div
          className="Rules-wrapper ck-content style-content-editable"
          dangerouslySetInnerHTML={{ __html: ruleContent?.content || '' }}
        />
      )} */}

      <div className="Rules-image">
        <img src={ImageRules} alt="" />
      </div>
      <div className="Rules-header">
        <div className="Rules-header-title">CÔNG TY TNHH THƯƠNG MẠI DỊCH VỤ G.O.C</div>
        <div className="Rules-header-description">QUY ĐỊNH VẬN CHUYỂN HÀNG HOÁ VÀ CHÍNH SÁCH BỒI THƯỜNG</div>
      </div>

      <div className="Rules-list">
        <div className="Rules-list-item">
          <div className="Rules-list-item-header flex items-end">
            <div className="Rules-list-item-header-circle">.01</div>
            ĐỐI VỚI HÀNG HOÁ KÝ GỬI THÔNG THƯỜNG
          </div>

          <div className="Rules-list-item-content">
            <ul>
              <li>
                Hàng hoá ký gửi của quý khách khi bị cơ quan chức năng kiểm tra chúng tôi sẽ cố gắng hết sức thu xếp đảm
                bảo hạn chế rủi ro xuống mức thấp nhất cho khách hàng, trong trường hợp cơ quan chức năng bắt buộc thu
                giữ, G.O.C sẽ bồi thường cho quý khách 1-3 lần cước vận chuyển nhưng không vượt quá giá trị thực tế của
                hàng hoá.
              </li>
              <li>
                Đối với hàng hoá bị thất lạc, G.O.C sẽ bồi thường 3-5 lần cước vận chuyển nhưng không vượt quá giá trị
                thực tế của hàng hoá.
              </li>
              <li>
                Hàng hoá là hàng thuỷ tinh / gốm sứ / hàng dễ vỡ yêu cầu quý khách khi giao dịch liên hệ shop đóng gói
                cẩn thận, có các biện pháp để bảo vệ hàng hoá hoặc có thể yêu cầu chúng tôi tiến hành đóng gỗ ( Chi phí
                đóng gỗ thấp nhất 30 tệ/ kiện, cao nhất 140 tệ/ m3). Hàng đóng gỗ nếu vỡ hỏng trong quá trình vận chuyển
                sẽ được bồi thường 100% giá trị hàng hoá dưới 10 triệu VNĐ.{' '}
              </li>
              <li>
                Khi hàng hoá của quý khách bị cơ quan chức năng kiểm tra, G.O.C sẽ thông báo với quý khách để cùng chung
                tay giải quyết vấn đề tốt nhất, giảm thiểu rủi ro xuống mức thấp nhất cho quý khách.
              </li>
            </ul>
          </div>
        </div>

        <div className="Rules-list-item">
          <div className="Rules-list-item-header flex items-end">
            <div className="Rules-list-item-header-circle">.02</div>
            ĐỐI VỚI HÀNG NHÁI THƯƠNG HIỆU / HÀNG HOÁ ĐƯỢC BẢO HỘ THƯƠNG HIỆU TẠI VIỆT NAM
          </div>

          <div className="Rules-list-item-content">
            <ul>
              <li>
                Khách hàng phải hoàn toàn chịu trách nhiệm về hàng hoá của mình khi bị các cơ quan chức năng kiểm tra /
                thu giữ.
              </li>
              <li>
                Khi hàng hoá của quý khách bị cơ quan chức năng kiểm tra, G.O.C sẽ thông báo với quý khách để cùng chung
                tay giải quyết vấn đề tốt nhất, giảm thiểu rủi ro xuống mức thấp nhất cho quý khách.
              </li>
            </ul>
          </div>
        </div>

        <div className="Rules-list-item">
          <div className="Rules-list-item-header flex items-end">
            <div className="Rules-list-item-header-circle">.03</div>
            ĐỐI VỚI HÀNG HOÁ THUỘC THỂ LỎNG / DẠNG BỘT / HÀNG DỄ CHÁY NỔ
          </div>

          <div className="Rules-list-item-content">
            <ul>
              <li>
                Hàng hoá thể lỏng như Nước hoa, đồ uống không cồn…. quý khách có thể nhập với số lượng vừa phải, mọi quy
                định bồi thường áp dụng (1)
              </li>
              <li>
                Hàng hoá dạng bột yêu cầu quý khách liên hệ nhà cung cấp đóng gói tốt nhất có thể, quý khách có thể nhập
                lượng nhỏ, mọi quy định bồi thường áp dụng (1)
              </li>
              <li>
                Hàng hoá của quý khách là hoá chất, yêu cầu liên hệ trực tiếp với chúng tôi để được tư vấn cụ thể. mọi
                quy định bồi thường áp dụng (1)
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="Rules-notes">
        <div className="Rules-notes-title">QUÝ KHÁCH HÀNG LƯU Ý: </div>
        <div className="Rules-notes-description error">G.O.C TUYỆT ĐỐI KHÔNG VẬN CHUYỂN HÀNG CẤM / HÀNG DỄ CHÁY NỔ</div>
        <div className="Rules-notes-description error">
          QUÝ KHÁCH HÀNG VI PHẠM ĐIỀU KHOẢN CỦA CHÚNG TÔI SẼ PHẢI CHỊU HOÀN TOÀN TRÁCH NHIỆM
        </div>
        <div className="Rules-notes-description error">
          QUÝ KHÁCH HÀNG SỬ DỤNG DỊCH VỤ CỦA G.O.C TỨC LÀ ĐỒNG Ý VỚI CÁC QUY ĐỊNH TRÊN
        </div>
        <div className="Rules-notes-description success">
          G.O.C XIN CHÂN THÀNH CẢM ƠN QUÝ KHÁCH HÀNG ĐÃ TIN TƯỞNG VÀ ĐỒNG HÀNH CÙNG CHÚNG TÔI SUỐT NHỮNG NĂM THÁNG QUA.
        </div>
      </div>
    </div>
  );
};

export default Rules;
