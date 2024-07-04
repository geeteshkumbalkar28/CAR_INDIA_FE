import { apiSlice } from "./apiSlice";

export const dealerAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllDealer: builder.query({
      query: (pageNo) => ({
        url: `/dealer/allDealers/${pageNo}`,
        transferResponce: console.log(pageNo),
        method: "GET",
      }),
      providesTags: (result) =>
        result ? [{ type: "Dealer", pageNo: result.pageNo }] : [],
    }),
    deleteDealer: builder.mutation({
      query: (id) => ({
        url: `/dealer/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Dealer"],
    }),
    getDealer: builder.query({
      query: (id) => ({
        url: `/dealer/${id}`,
        transerResponse:console.log(id),
      }),
      providesTags: ["Dealer"],
    }),
    getEditDealer: builder.mutation({
      query: (userid) => ({
        url: `/dealer/updateDealer/${userid.id}`,
        method: "PUT",
       transerResponse:console.log(userid.id),
        body: userid.inputField,
      }),
      invalidatesTags: ["Dealer"],
    }),
    getAllDealerCompleteBooking: builder.query({
      query: ({page,id}) => ({
        url: `/confirmBooking/getAllBookingsByDealerId?pageNo=${page}&dealerId=${id}`,
        transerResponse:console.log(page,id)
      }),
      providesTags: ["DEALERBOOKING"],
    }),
    getAllDealerPendingBooking: builder.query({
      query: (id) => ({
        url: `/booking/getPendingBookingDetailsByDealerID?pageNo=0&dealerId=${id}`,
      }),
      providesTags: ["DEALERBOOKING"],
    }),

    addCarImages: builder.mutation({
      query: ({ formData, document, firstCarId,UserID}) => ({
        url: `/uploadFile/add?documentType=${document}&userId=${UserID}&carId=${firstCarId}`,
        transerResponse:console.log("APi response",formData, firstCarId,document,UserID),
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: ['Dealer'],
    }),

    dealerStatus: builder.mutation({
      query: ({ dealer_id, status }) => ({
        url: `/dealer/statusUpdate?dealerId=${dealer_id}&status=${status}`,
        transerResponse:console.log("APi response",dealer_id,status),
        method: 'PATCH',
      }),
      invalidatesTags: ['Dealer'],
    }),
    
  }),
});

export const {
  useGetAllDealerQuery,
  useDeleteDealerMutation,
  useGetDealerQuery,
  useGetEditDealerMutation,
  useGetAllDealerCompleteBookingQuery,
  useGetAllDealerPendingBookingQuery,
  useAddCarImagesMutation,
  useDealerStatusMutation
  
} = dealerAPI;
