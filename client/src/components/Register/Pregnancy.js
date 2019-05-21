import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

const Pregnancy = (props) => {
  return (
    <div>
    <br />
    <b>Are you pregnant?</b>
    <FormGroup check >
      <Label check>
        <Input type="radio" name="pregnancy" value="false" onChange={props.handleChange} />{' '}
        I am NOT pregnant.
        </Label>
    </FormGroup>
    <FormGroup check >
      <Label check>
        <Input type="radio" name="pregnancy" value="true" onChange={props.handleChange} />{' '}
        I AM pregnant now.
        </Label>
    </FormGroup>
  </div>
    // <div>
    //   <br />
    //   <FormGroup check>
    //     <Label check>
    //       <Input type="checkbox" name="potential" value = "false"/>{' '}
    //       I could become pregnant
    //       </Label>
    //   </FormGroup>
    //   <FormGroup check>
    //     <Label check>
    //       <Input type="checkbox" name="pregnant" value = "true"/>{' '}
    //       I am pregnant now
    //       </Label>
    //   </FormGroup>
    //   <FormGroup check>
    //     <Label check>
    //       <Input type="checkbox" name="noplan" value = "false"/>{' '}
    //       I am not planning to become pregnant
    //       </Label>
    //   </FormGroup>
    //   <FormGroup check>
    //     <Label check>
    //       <Input type="checkbox" name="cannot" value="false" />{' '}
    //       I could not become pregnant
    //       </Label>
    //   </FormGroup>
    // </div>
  );
};

export default Pregnancy;