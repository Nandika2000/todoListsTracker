import React from 'react';
import { fireEvent, render, screen ,within} from '@testing-library/react';
import { CREATE_LIST,LISTS_ROUTE } from '../../constants/routes';
import AllLists from './AllLists';
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
useNavigate: () => mockNavigate
}));
const mockListData = [{id:1,name:'abc'}];
describe('AllLists page', ()=> {
const component = (listData=mockListData) => (
  <AllLists listData={listData}/>
)
beforeEach(() => {
    mockNavigate.mockClear();
    });

    it('should navigate to create_list page when create list button is clicked',()=>{
        render(component());
        fireEvent.click(screen.getByText('CREATE LIST'));
        expect(mockNavigate).toBeCalledTimes(1);
        expect(mockNavigate).toBeCalledWith(CREATE_LIST);
    });
    it('should not navigate to create_list page when button isnt clicked',()=>{
        render(component());
        expect(mockNavigate).toBeCalledTimes(0);
    });
    it('should render all the listnames',()=> {
        render(component());
        const list = screen.getByRole("list")
          const { getAllByRole } = within(list)
          const items = getAllByRole("listitem")
          expect(items.length).toBe(1)
    });
    it('should navigate to lists route when view tasks is clicked',()=>{
        render(component());
        fireEvent.click(screen.getByText('View Tasks'));
        expect(mockNavigate).toBeCalledTimes(1);
        expect(mockNavigate).toBeCalledWith(`${LISTS_ROUTE}/1`);
    });
    it('should not navigate to lists route if view tasks is not clicked',()=>{
        render(component());
        expect(mockNavigate).toBeCalledTimes(0);
    });
})