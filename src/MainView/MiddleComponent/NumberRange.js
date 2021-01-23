import React from 'react'
import "./NumberRange.css"
import Result from "./Result"

function NumberRange({resultLoop}) {

   const AddResultRow = resultLoop.map((row,index)=>{
    //    const lastIndexPosition= resultLoop.lastIndexOf('+1Row')
    //    console.log(lastIndexPosition);
       console.log(index + "This is index");
       return(
           <Result key={index}  />
       )
   })

    return (
        <div className="NumberRange__Row">
                <div className="NumberRange">
                    <div className="Number__Button__Row">
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>1</span></button>
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>2</span></button>
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>3</span></button>
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>4</span></button>
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>5</span></button>
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>6</span></button>
                    </div>

                    <div className="Number__Button__Row">
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>7</span></button>
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>8</span></button>
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>9</span></button>
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>10</span></button>
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>11</span></button>
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>12</span></button>
                    </div>
                    
                    <div className="Number__Button__Row">
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>13</span></button>
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>14</span></button>
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>15</span></button>
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>16</span></button>
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>17</span></button>
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>18</span></button>
                    </div>

                    <div className="Number__Button__Row">
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>19</span></button>
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>20</span></button>
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>21</span></button>
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>22</span></button>
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>23</span></button>
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>24</span></button>
                    </div>

                    <div className="Number__Button__Row">
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>25</span></button>
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>26</span></button>
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>27</span></button>
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>28</span></button>
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>29</span></button>
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>30</span></button>
                    </div>

                    <div className="Number__Button__Row">
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>31</span></button>
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>32</span></button>
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>33</span></button>
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>34</span></button>
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>35</span></button>
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>36</span></button>
                    </div>

                    <div className="Number__Button__Row">
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>37</span></button>
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>38</span></button>
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>39</span></button>
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>40</span></button>
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>41</span></button>
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>42</span></button>
                    </div>

                    <div className="Number__Button__Row">
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>43</span></button>
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>44</span></button>
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>45</span></button>
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>46</span></button>
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>47</span></button>
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>48</span></button>
                    </div>

                    <div className="Number__Button__Row">
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>49</span></button>
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>50</span></button>
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>51</span></button>
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>52</span></button>
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>53</span></button>
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>54</span></button>
                    </div>

                    <div className="Number__Button__Row">
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>55</span></button>
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>56</span></button>
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>57</span></button>
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>58</span></button>
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>59</span></button>
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>60</span></button>
                    </div>

                    <div className="Number__Button__Row">
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>61</span></button>
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>62</span></button>
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>63</span></button>
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>64</span></button>
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>65</span></button>
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>66</span></button>
                    </div>

                    <div className="Number__Button__Row">
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>67</span></button>
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>68</span></button>
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>69</span></button>
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>70</span></button>
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>71</span></button>
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>72</span></button>
                    </div>

                    <div className="Number__Button__Row">
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>73</span></button>
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>74</span></button>
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>75</span></button>
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>76</span></button>
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>77</span></button>
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>78</span></button>
                    </div>

                    <div className="Number__Button__Row">
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>79</span></button>
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>80</span></button>
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>81</span></button>
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>82</span></button>
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>83</span></button>
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>84</span></button>
                    </div>

                    <div className="Number__Button__Row">
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>85</span></button>
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>86</span></button>
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>87</span></button>
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>88</span></button>
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>89</span></button>
                        <button type="button" className="btn btn-outline-success  Number_Button"><span>90</span></button>
                    </div>
                </div>
                <div>
                    {AddResultRow}
                </div>
        </div>
    
    )
}

export default NumberRange
