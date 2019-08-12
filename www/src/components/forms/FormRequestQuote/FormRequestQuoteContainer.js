import { connect } from 'react-redux';
import { submitRequest } from '../../project/state';
import FormRequesQuote from './FormRequesQuote';

const volumenoptions = [
  {
    value: 'none',
    label: 'I don`t know',
  },
  {
    value: '0-20',
    label: '0 to 20',
  },
  {
    value: '21-50',
    label: '21 to 50',
  },
  {
    value: '51-100',
    label: '51 to 100',
  },
];

const ranges = [
  {
    value: 'none',
    label: 'I don`t know',
  },
  {
    value: '0-20',
    label: '0 to 20',
  },
  {
    value: '21-50',
    label: '21 to 50',
  },
  {
    value: '51-100',
    label: '51 to 100',
  },
];
const defaultValues = {
  name: 'Jhon Perez',
  companyname: 'For Company ',
  email: 'company@correo.com',
  phonenumber: '123-123456',
  selectvolumen: 'none',
  selectbudget: 'none',
};
const mapStateToProps = state => ({
  loadingform: state.projectState.loadingform,
  volumenoptions: volumenoptions,
  ranges: ranges,
  defaultValues: defaultValues,
});

const mapDispatchToProps = dispatch => ({
  submitRequest: data => dispatch(submitRequest(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormRequesQuote);
